import { ref } from 'vue';
import { Helper, type TContextColor } from 'vue-mdbootstrap';

export declare type TNotificationMsg = {
  id: string;
  fullName: string;
  message: string;
  published: string;
  unread: boolean;
  avatar?: string;
  quote?: string;
  badge?: string;
  badgeColor?: TContextColor;
};

export const msgData = ref<TNotificationMsg[]>([
  {
    id: Helper.uuid(true),
    fullName: 'Brian Warner',
    message: 'Change an issue from "in-progress" to <badge>Review</badge>',
    published: '1 hr ago',
    unread: true,
    avatar: '/images/avatar-1.jpg',
    badge: 'Review',
    badgeColor: 'secondary'
  },
  {
    id: Helper.uuid(true),
    fullName: 'Samantha Garner',
    message: 'mention you in a comment',
    published: '2 hrs ago',
    unread: false,
    avatar: '/images/avatar-3.jpg',
    quote: 'Nice work, love! You really nailed it. Keep it up!'
  },
  {
    id: Helper.uuid(true),
    fullName: 'Brian Hawks',
    message: 'Join the slack group HS team',
    published: '5 hrs ago',
    unread: false,
    avatar: '/images/avatar-5.webp'
  },
  {
    id: Helper.uuid(true),
    fullName: 'Kelly Watson',
    message: 'Start using forms to capture information of prospects',
    published: 'yesterday',
    unread: false
  },
  {
    id: Helper.uuid(true),
    fullName: 'Sara Villar',
    message: 'Completed FD-7 task',
    published: 'yesterday',
    unread: false,
    avatar: '/images/avatar-7.webp'
  }
]);
