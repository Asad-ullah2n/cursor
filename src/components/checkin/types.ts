export type CheckInMode = 'qr' | 'manual';

export type Guest = {
  id: string;
  name: string;
  ticketType: string;
  avatar: string;
  checkedIn: boolean;
};
