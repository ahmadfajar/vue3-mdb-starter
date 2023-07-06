export declare type TBoardItemProps = {
  avatarSrc?: string[];
  imgSrc?: string;
  title?: string;
  description?: string;
  taskCount?: string | number;
  commentCount?: string | number;
  likeCount?: string | number;
  dislikeCount?: string | number;
};

export declare const BoardItem: {
  new (): {
    $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & TBoardItemProps;
  };
};
