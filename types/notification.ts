export type Notification = {
  id: string;
  event: string;
  channel: string;
  description: string;
  createdAt: number;
};

export type NotificationCreate = {
  event: string;
  channel: string;
  description: string;
  createdAt: object;
};
