export type Notification = {
  id: string;
  event: string;
  channel: string;
  description: string;
  createdAt: number;
};

export type NotificationCreate = Omit<Notification, "id">;
