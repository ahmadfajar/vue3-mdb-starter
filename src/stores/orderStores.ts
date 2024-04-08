import { fetchPersonApi, randomDate, randomNumber } from '@/mixins/sharedApi';
import { BsArrayStore, Helper, type TBsModel } from 'vue-mdbootstrap';

export declare type TPaymentStatus = 'Paid' | 'Unpaid' | 'Pending' | 'Failed';

export declare type TOrderStatus = 'Shipped' | 'Processing' | 'Cancelled' | 'Delivered';

export declare type TOrderRecord = TBsModel & {
  orderId: number;
  orderDate: Date;
  customer: string;
  paymentStatus: TPaymentStatus;
  orderStatus: TOrderStatus;
  total: number;
  checked: boolean;
};

let payment: TPaymentStatus;
let status: TOrderStatus;
let rnd: number;

export async function populate(count: number): Promise<BsArrayStore> {
  const ordersData = new BsArrayStore([], { idProperty: 'orderId' });
  const response = await fetchPersonApi(count);
  const personData = response.results;

  for (let idx = 0; idx < count; idx++) {
    const dt = new Date();
    dt.setFullYear(dt.getFullYear() - 3);
    const modInt = idx % 4;

    switch (modInt) {
      case 1:
        payment = 'Pending';
        status = 'Processing';
        break;
      case 2:
        payment = 'Unpaid';
        status = 'Cancelled';
        break;
      case 3:
        payment = 'Failed';
        status = 'Cancelled';
        break;
      default:
        rnd = Math.round(randomNumber(0, 2));
        payment = 'Paid';
        status = rnd === 0 ? 'Delivered' : rnd === 1 ? 'Shipped' : 'Processing';
        break;
    }

    const item = {
      orderId: Math.round(randomNumber(1000, 5000)),
      orderDate: randomDate(dt, new Date()),
      customer: `${personData[idx].name.first} ${personData[idx].name.last}`,
      paymentStatus: payment,
      orderStatus: status,
      total: Helper.roundNumber(randomNumber(200.0, 5000.0), 2),
      checked: false
    };
    ordersData.append(<never>item);
  }

  return ordersData;
}

export function badgePaymentColor(item: TOrderRecord): string {
  if (item.paymentStatus === 'Paid') {
    return 'success bg-rgba-green-slight';
  } else if (item.paymentStatus === 'Unpaid') {
    return 'info bg-rgba-light-blue-slight';
  } else if (item.paymentStatus === 'Pending') {
    return 'warning bg-rgba-amber-slight';
  } else {
    return 'danger bg-rgba-red-slight';
  }
}

export function badgePaymentIcon(item: TOrderRecord): string {
  if (item.paymentStatus === 'Paid') {
    return 'done';
  } else if (item.paymentStatus === 'Unpaid') {
    return 'report';
  } else if (item.paymentStatus === 'Pending') {
    return 'schedule';
  } else {
    return 'block';
  }
}

export function badgeOrderStatusColor(item: TOrderRecord): string {
  if (item.orderStatus === 'Delivered') {
    return 'success bg-rgba-green-slight';
  } else if (item.orderStatus === 'Shipped') {
    return 'info bg-rgba-blue-slight';
  } else if (item.orderStatus === 'Processing') {
    return 'default bg-rgba-deep-purple-slight';
  } else {
    return 'danger bg-rgba-red-slight';
  }
}

export function badgeOrderStatusIcon(item: TOrderRecord) {
  if (item.orderStatus === 'Delivered') {
    return 'done';
  } else {
    return undefined;
  }
}
