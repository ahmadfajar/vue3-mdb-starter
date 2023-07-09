import { useHttpService } from 'vue-mdbootstrap';

export function randomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function randomDate(from: Date, to: Date): Date {
  const fromTime = from.getTime();
  const toTime = to.getTime();

  return new Date(fromTime + Math.random() * (toTime - fromTime));
}

export function pickRandom(list: string[]): string {
  return list[Math.floor(Math.random() * list.length)];
}

export async function fetchPersonApi(count: number) {
  const http = useHttpService();
  const response = await http?.get(`https://randomuser.me/api/?results=${count}`);

  return response?.data;
}
