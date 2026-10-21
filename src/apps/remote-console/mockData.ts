export type MockRoleInstance = {
  id: string;
  instanceLabel: string;
  ip: string;
  region: string;
  state: "running" | "stopped";
};

export type MockEventGroup = {
  eventId: string;
  eventLabel: string;
  roles: {
    roleName: string;
    instances: MockRoleInstance[];
  }[];
};

export const mockEventGroups: MockEventGroup[] = [
  {
    eventId: "LIVE-2026-0912",
    eventLabel: "Main Live",
    roles: [
      {
        roleName: "central",
        instances: [
          {
            id: "i-0central001",
            instanceLabel: "INILIVE-Central-Console",
            ip: "10.0.12.10",
            region: "ap-northeast-2",
            state: "running",
          },
        ],
      },
      {
        roleName: "encoder",
        instances: [
          {
            id: "i-0encodrA01",
            instanceLabel: "encoder-a",
            ip: "10.0.12.21",
            region: "ap-northeast-2",
            state: "running",
          },
          {
            id: "i-0encodrB01",
            instanceLabel: "encoder-b",
            ip: "10.0.12.22",
            region: "ap-northeast-2",
            state: "running",
          },
        ],
      },
    ],
  },
  {
    eventId: "LIVE-2026-1001",
    eventLabel: "Stage Rehearsal",
    roles: [
      {
        roleName: "relay",
        instances: [
          {
            id: "i-0stage0001",
            instanceLabel: "stage-relay",
            ip: "10.0.20.5",
            region: "ap-northeast-2",
            state: "stopped",
          },
        ],
      },
    ],
  },
];

export const mockTerminalLinesByHost: Record<string, string[]> = {
  "INILIVE-Central-Console": [
    "Starting session with SessionId: ops-central-001",
    "[root@INILIVE-Central-Console ~]# uname -a",
    "Linux inilive-central 6.1.0-aws #1 SMP x86_64 GNU/Linux",
    "[root@INILIVE-Central-Console ~]# systemctl is-active nginx",
    "active",
    "[root@INILIVE-Central-Console ~]# df -h /",
    "Filesystem      Size  Used Avail Use% Mounted on",
    "/dev/nvme0n1p1   50G   18G   32G  37% /",
  ],
  "encoder-a": [
    "Starting session with SessionId: ops-enc-a-001",
    "[root@encoder-a ~]# nvidia-smi -L",
    "GPU 0: NVIDIA L4 (UUID: GPU-demo-aaaa)",
    "[root@encoder-a ~]# systemctl is-active encoder.service",
    "active",
  ],
  "encoder-b": [
    "Starting session with SessionId: ops-enc-b-001",
    "[root@encoder-b ~]# uptime",
    " 04:42:11 up 3 days,  2:11,  1 user,  load average: 0.42, 0.38, 0.35",
    "[root@encoder-b ~]# ss -ltnp | head -n 5",
    "LISTEN 0 128 0.0.0.0:22 ...",
  ],
  "stage-relay": [
    "Starting session with SessionId: ops-stage-001",
    "[root@stage-relay ~]# echo stage ready",
    "stage ready",
  ],
};
