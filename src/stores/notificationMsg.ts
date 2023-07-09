import { ref } from 'vue';
import { Helper } from 'vue-mdbootstrap';

export declare type TNotificationMsg = {
  id: string;
  fullname: string;
  message: string;
  published: string;
  unread: boolean;
  avatar?: string;
  quote?: string;
  badge?: string;
  badgeColor?: string;
};

export const msgData = ref<TNotificationMsg[]>([
  {
    id: Helper.uuid(true),
    fullname: 'Brian Warner',
    message: 'Change an issue from "in-progress" to <badge>Review</badge>',
    published: '1 hr ago',
    unread: true,
    avatar: '/images/avatar-1.jpg',
    badge: 'Review',
    badgeColor: 'default'
  },
  {
    id: Helper.uuid(true),
    fullname: 'Samantha Garner',
    message: 'mention you in a comment',
    published: '2 hrs ago',
    unread: true,
    avatar: '/images/avatar-3.jpg',
    quote: 'Nice work, love! You really nailed it. Keep it up!'
  },
  {
    id: Helper.uuid(true),
    fullname: 'Obrian Hawks',
    message: 'Join the slack group HS team',
    published: '5 hrs ago',
    unread: true,
    avatar: '/images/avatar-5.webp'
  },
  {
    id: Helper.uuid(true),
    fullname: 'Kelly Watson',
    message: 'Start using forms to capture information of prospects',
    published: 'yesterday',
    unread: false
  },
  {
    id: Helper.uuid(true),
    fullname: 'Sara Villar',
    message: 'Completed FD-7 task',
    published: 'yesterday',
    unread: false,
    avatar: '/images/avatar-7.webp'
  }
]);
