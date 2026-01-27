import type { AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";
import type { Numberish } from 'vue-mdbootstrap';

export declare type TBoardItemProps = {
  avatarSrc?: string[];
  imgSrc?: string;
  title?: string;
  description?: string;
  taskCount?: Numberish;
  commentCount?: Numberish;
  likeCount?: Numberish;
  dislikeCount?: Numberish;
};

export declare const BoardItem: {
  new (): {
    $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & TBoardItemProps;
  };
};

export declare type TEventClose = (event: 'close', ...args: unknown[]) => void;
