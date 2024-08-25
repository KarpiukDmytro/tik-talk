export interface Profile {
  id: number,
  username: string,
  avatarUrl: string | null,
  description: string,
  subscriptionsAmount: number,
  firstName: string,
  lastName: string,
  isActive: boolean,
  stack: string[],
  city: string,
}
