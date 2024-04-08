<script setup lang="ts">
import TileMessagePart from '@/components/TileMessagePart.vue';
import { msgData, type TNotificationMsg } from '@/stores/notificationMsg';
import { Helper, type TAvatarOptionProps } from 'vue-mdbootstrap';
import type { TEventClose } from './types';

defineEmits(['close']);

const avatarProps = (item: TNotificationMsg): TAvatarOptionProps => ({
  imgSrc: item.avatar,
  text: item.avatar ? undefined : item.fullname.charAt(0),
  size: 40,
  circle: true
});
const closePopup = (emitFn: TEventClose) => {
  Helper.defer(() => {
    emitFn('close');
  }, 300);
};
</script>

<template>
  <div class="notification-container">
    <div class="notification-header">Notification</div>
    <BsListView individual-state>
      <template v-for="(item, index) in msgData" :key="item.id">
        <BsListTile v-model:active="item.unread" navigable>
          <BsListTileLeading class="pt-1">
            <BsAvatar v-bind="avatarProps(item)" class="bg-grey-300" />
          </BsListTileLeading>
          <BsListTileContent multi-line>
            <BsListTileTitle class="fw-semibold">
              {{ item.fullname }}
            </BsListTileTitle>
            <BsListTileSubtitle>
              <TileMessagePart
                :message="item.message"
                :badge-color="item.badgeColor"
                :quote="item.quote"
              />
            </BsListTileSubtitle>
          </BsListTileContent>
          <BsListTileAction class="published">
            {{ item.published }}
          </BsListTileAction>
        </BsListTile>
        <BsDivider v-if="index + 1 < msgData.length" :key="item.id + index" />
      </template>
    </BsListView>
    <div class="notification-footer">
      <div class="d-grid gap-2">
        <BsButton color="primary-color-dark" flat @click="closePopup($emit)">
          View all notifications
        </BsButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.notification-container {
  border-radius: var(--bs-border-radius);
  display: flex;
  flex-direction: column;
  max-height: 530px;
  overflow: hidden;

  > .notification-header {
    border-bottom: 1px solid rgb(0, 0, 0, 0.175);
    font-size: 110%;
    font-weight: bold;
    padding: 1rem;
  }

  > .notification-footer {
    border-top: 1px solid rgb(0, 0, 0, 0.175);
    padding: .875rem 1rem;
  }

  > .md-list {
    --md-listview-padding-y: 0;

    .blockquote {
      color: #888;
      font-size: 0.95rem;
      margin-bottom: 0.5rem;
      border-left: 3px solid #d6d5d5;
      padding-left: 0.875rem;
    }

    .published {
      font-size: small;
      font-weight: 500;
      width: 65px;
      text-align: end;
    }

    .md-list-tile {
      &.active {
        .blockquote {
          color: rgba(#6f42c1, 0.85);
          border-left-color: rgba(#6f42c1, 0.35);
        }
      }
    }
  }

  @media (min-width: 768px) {
    width: 420px;
  }
}
</style>
