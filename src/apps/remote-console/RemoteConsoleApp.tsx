import { useEffect, useMemo, useState } from "react";
import {
  mockEventGroups,
  mockTerminalLinesByHost,
  type MockRoleInstance,
} from "./mockData";
import "./styles/brand.css";
import styles from "./RemoteConsoleApp.module.css";

type Selected = {
  eventId: string;
  eventLabel: string;
  roleName: string;
  instance: MockRoleInstance;
  peers: { roleName: string; instance: MockRoleInstance }[];
};

function IconLink() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10 13a5 5 0 0 0 7.07 0l1.42-1.42a5 5 0 0 0-7.07-7.07L10 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14 11a5 5 0 0 0-7.07 0L5.5 12.42a5 5 0 0 0 7.07 7.07L14 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RemoteConsoleApp({ fill = false }: { fill?: boolean }) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("전체 (서울/도쿄)");
  const [regionOpen, setRegionOpen] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(["LIVE-2026-0912:central", "LIVE-2026-0912:encoder"]),
  );
  const [selected, setSelected] = useState<Selected | null>(null);
  const [connected, setConnected] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const [fullscreen, setFullscreen] = useState(false);
  const [copied, setCopied] = useState("");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return mockEventGroups
      .map((group) => ({
        ...group,
        roles: group.roles
          .map((role) => ({
            ...role,
            instances: role.instances.filter((inst) => {
              const regionOk =
                region.startsWith("전체") || inst.region === "ap-northeast-2";
              const queryOk =
                !q ||
                inst.instanceLabel.toLowerCase().includes(q) ||
                group.eventId.toLowerCase().includes(q) ||
                group.eventLabel.toLowerCase().includes(q) ||
                role.roleName.toLowerCase().includes(q);
              return regionOk && queryOk;
            }),
          }))
          .filter((role) => role.instances.length > 0),
      }))
      .filter((group) => group.roles.length > 0);
  }, [query, region]);

  const terminalLines =
    mockTerminalLinesByHost[selected?.instance.instanceLabel ?? ""] ??
    mockTerminalLinesByHost["INILIVE-Central-Console"];

  useEffect(() => {
    if (!connected || !selected) {
      setLines([]);
      return;
    }
    setLines([]);
    let i = 0;
    const timer = window.setInterval(() => {
      setLines((prev) => [...prev, terminalLines[i]]);
      i += 1;
      if (i >= terminalLines.length) window.clearInterval(timer);
    }, 360);
    return () => window.clearInterval(timer);
  }, [connected, selected, terminalLines]);

  const connectTo = (
    group: (typeof mockEventGroups)[number],
    roleName: string,
    instance: MockRoleInstance,
  ) => {
    const peers = group.roles.flatMap((role) =>
      role.instances.map((item) => ({ roleName: role.roleName, instance: item })),
    );
    setSelected({
      eventId: group.eventId,
      eventLabel: group.eventLabel,
      roleName,
      instance,
      peers,
    });
    setConnected(true);
  };

  const flashCopy = (key: string, text: string) => {
    navigator.clipboard?.writeText(text).catch(() => undefined);
    setCopied(key);
    window.setTimeout(() => setCopied(""), 1200);
  };

  const listView = !connected || !selected;

  return (
    <div
      className={`${styles.frame} brand-shell ${fullscreen ? styles.frameFull : ""} ${
        fill ? styles.frameFill : ""
      }`}
    >
      <span className="brand-shell__watermark" aria-hidden>
        INISOFT
      </span>
      <div className="brand-shell__content">
        <header
          className={
            listView ? "app-header" : "app-header app-header--terminal"
          }
        >
          {listView ? (
            <div className="app-header__logo">
              <span className="app-header__mark" aria-hidden>
                ◇
              </span>
              <div className="app-header__masthead">
                <div className="app-header__brand-line">
                  <span className="app-header__brand-name">INISOFT</span>
                  <span className="app-header__brand-divider" />
                  <span className="app-header__brand-subtitle">
                    Remote Console
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="app-header__terminal-left">
              <button
                type="button"
                className="btn btn--secondary btn--sm"
                onClick={() => {
                  setConnected(false);
                  setSelected(null);
                  setFullscreen(false);
                }}
              >
                목록으로
              </button>
              <strong className={styles.terminalTitle}>
                {selected?.eventLabel} · {selected?.instance.instanceLabel}
              </strong>
            </div>
          )}

          {!listView ? (
            <div className="app-header__between-slot">
              <span className={styles.contextPill}>
                {selected?.roleName} · {selected?.instance.region}
              </span>
            </div>
          ) : null}

          <div className="app-header__user">
            <div className="app-header__user-text">
              <div className="app-header__id app-header__id--solo">
                ops@inisoft.mock
              </div>
            </div>
            <button type="button" className="btn btn--secondary btn--sm">
              로그아웃
            </button>
          </div>
        </header>

        {listView ? (
          <section className={`is-root ${styles.listRoot}`}>
            <header className="is-filter-toolbar">
              <p className="is-sr-only">인스턴스 필터</p>
              <div className="is-toolbar-strip">
                <div className="is-search-row is-search-row--toolbar">
                  <div className="is-region-dropdown">
                    <button
                      type="button"
                      className="is-region-dropdown__trigger"
                      onClick={() => setRegionOpen((v) => !v)}
                    >
                      <span className="is-region-dropdown__pin" aria-hidden>
                        ⌖
                      </span>
                      <span className="is-region-dropdown__value">{region}</span>
                      <span className="is-region-dropdown__chev">▾</span>
                    </button>
                    {regionOpen ? (
                      <div className="is-region-dropdown__panel">
                        <p className="is-region-dropdown__heading">리전</p>
                        <ul className="is-region-dropdown__list">
                          {["전체 (서울/도쿄)", "ap-northeast-2"].map((opt) => (
                            <li key={opt} className="is-region-dropdown__li">
                              <button
                                type="button"
                                onClick={() => {
                                  setRegion(opt);
                                  setRegionOpen(false);
                                }}
                              >
                                {opt}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <label className="is-field is-field--compact is-field--search">
                    <span className="is-field__icon" aria-hidden>
                      ⌕
                    </span>
                    <input
                      className="is-input"
                      value={query}
                      placeholder="이벤트 / 인스턴스 / 역할 검색"
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </label>
                  <button
                    type="button"
                    className="btn btn--primary is-search-btn is-search-btn--compact"
                  >
                    검색
                  </button>
                  <button
                    type="button"
                    className="btn btn--secondary is-search-btn is-search-btn--compact"
                    onClick={() => setQuery("")}
                  >
                    초기화
                  </button>
                </div>
              </div>
            </header>

            <div className="is-instance-scroll">
              <div className="instance-grid is-grid">
                {groups.map((group) => (
                  <article
                    key={group.eventId}
                    className="glass-card instance-card is-card"
                  >
                    <div className="is-card__head">
                      <h3 className="is-card__eventTitle">{group.eventLabel}</h3>
                      <button
                        type="button"
                        className={`is-card__eventIdPill${
                          copied === group.eventId
                            ? " is-card__eventIdPill--done"
                            : ""
                        }`}
                        onClick={() => flashCopy(group.eventId, group.eventId)}
                      >
                        <IconLink />
                        <span className="is-card__eventIdText">
                          {group.eventId}
                        </span>
                      </button>
                    </div>

                    <div className="is-rows">
                      {group.roles.map((role, roleIdx) => {
                        const key = `${group.eventId}:${role.roleName}`;
                        const open = expanded.has(key);
                        return (
                          <div
                            key={role.roleName}
                            className="is-role-section"
                            data-last={
                              roleIdx === group.roles.length - 1 ? "true" : "false"
                            }
                          >
                            <button
                              type="button"
                              className="is-role-toggle"
                              aria-expanded={open}
                              data-open={open ? "true" : "false"}
                              onClick={() =>
                                setExpanded((prev) => {
                                  const next = new Set(prev);
                                  if (next.has(key)) next.delete(key);
                                  else next.add(key);
                                  return next;
                                })
                              }
                            >
                              <span className="is-row__role">
                                <span className="is-row__role-icon">▣</span>
                                <span className="is-row__role-text">
                                  {role.roleName}
                                </span>
                                <span className="is-role-toggle__count">
                                  {role.instances.length}
                                </span>
                              </span>
                              <span className="is-role-toggle__chev" aria-hidden>
                                {open ? "▴" : "▾"}
                              </span>
                            </button>

                            {open ? (
                              <div className="is-role-instances">
                                {role.instances.map((inst, idx) => (
                                  <div
                                    key={inst.id}
                                    role="button"
                                    tabIndex={0}
                                    className="instance-role-row instance-role-row--nested"
                                    data-last={
                                      idx === role.instances.length - 1
                                        ? "true"
                                        : "false"
                                    }
                                    onClick={() =>
                                      connectTo(group, role.roleName, inst)
                                    }
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        connectTo(group, role.roleName, inst);
                                      }
                                    }}
                                  >
                                    <div className="is-row__meta">
                                      <div className="is-row__instanceName">
                                        {inst.instanceLabel}
                                      </div>
                                      <div className="is-row__sub">
                                        <span className="is-meta-field">
                                          <span className="is-meta-field__label">
                                            인스턴스 IP
                                          </span>
                                          <span className="is-meta-field__value is-mono">
                                            {inst.ip}
                                          </span>
                                        </span>
                                        <span className="is-meta-sep" aria-hidden>
                                          |
                                        </span>
                                        <span className="is-meta-field">
                                          <span className="is-meta-field__label">
                                            region
                                          </span>
                                          <span className="is-meta-field__value">
                                            {inst.region}
                                          </span>
                                        </span>
                                        <span className="is-meta-sep" aria-hidden>
                                          |
                                        </span>
                                        <span className="is-meta-field">
                                          <span className="is-meta-field__label">
                                            state
                                          </span>
                                          <span className="is-meta-field__value">
                                            {inst.state}
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn--primary btn--sm"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        connectTo(group, role.roleName, inst);
                                      }}
                                    >
                                      연결
                                    </button>
                                  </div>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className={styles.terminalWorkspace}>
            <div className={styles.terminalMain}>
              <div className={styles.termToolbar}>
                <span className={styles.liveDot} />
                <span>ttyd · SSM Session Manager (mock)</span>
                <button
                  type="button"
                  className={styles.iconBtn}
                  onClick={() => setFullscreen((v) => !v)}
                  aria-label="전체화면"
                >
                  <img
                    src={
                      fullscreen
                        ? "/projects/remote-console/terminal-shrink.png"
                        : "/projects/remote-console/terminal-expand.png"
                    }
                    alt=""
                  />
                </button>
              </div>
              <pre className={styles.xterm}>
                {`${lines.join("\n")}${
                  lines.length < terminalLines.length ? "\n█" : "\n$"
                }`}
              </pre>
            </div>

            <aside className="terminal-footer-peer-switch dashboard-peer-instance-rail">
              <div className="dashboard-segment-track dashboard-segment-track--vertical">
                {selected?.peers.map((peer) => {
                  const active = peer.instance.id === selected.instance.id;
                  return (
                    <button
                      key={peer.instance.id}
                      type="button"
                      className={`dashboard-segment-tab${
                        active ? " dashboard-segment-tab--active" : ""
                      }`}
                      onClick={() => {
                        setSelected({
                          ...selected,
                          roleName: peer.roleName,
                          instance: peer.instance,
                        });
                        setConnected(true);
                      }}
                    >
                      <span className="dashboard-segment-tab__peer-marker" />
                      <span className="dashboard-segment-tab__label">
                        {peer.instance.instanceLabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>
          </section>
        )}
      </div>
    </div>
  );
}
