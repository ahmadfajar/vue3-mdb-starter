import type { Reactive, Ref } from 'vue';
import { useHttpService } from 'vue-mdbootstrap';

export function randomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function randomDate(from: Date, to: Date): Date {
  const fromTime = from.getTime();
  const toTime = to.getTime();

  return new Date(fromTime + Math.random() * (toTime - fromTime));
}

export function pickRandom(list: string[]): string | undefined {
  return list[Math.floor(Math.random() * list.length)];
}

export async function fetchPersonApi(count: number) {
  const http = useHttpService();
  const response = await http?.get(`https://randomuser.me/api/?results=${count}`);

  return response?.data;
}

declare type SlidingOptions = {
  contentId: string;
  contentWidth: number;
  wrapperWidth: number;
};

export function useTouchOrWheel(slider: Reactive<SlidingOptions>, scrollOffset: Ref<number>) {
  const touchOrWheelHandler = (deltaX: number) => {
    const el = document.getElementById(slider.contentId);

    if (el) {
      slider.contentWidth = el?.clientWidth ?? slider.contentWidth;
      const parent = el.parentElement;
      slider.wrapperWidth = parent?.clientWidth ?? slider.wrapperWidth;
      const newOffset = scrollOffset.value + deltaX;
      const deltaW = slider.contentWidth - slider.wrapperWidth;
      const deltaW1 = deltaW + 200;
      scrollOffset.value =
        newOffset > 200 ? 200 : Math.abs(newOffset) > deltaW1 ? -deltaW1 : newOffset;
      el.style.transform = `translateX(${scrollOffset.value}px)`;

      if (scrollOffset.value > 0 || scrollOffset.value < -deltaW) {
        window.requestAnimationFrame(() => {
          if (scrollOffset.value > 0) {
            scrollOffset.value = 0;
            el.style.transform = `translateX(${scrollOffset.value}px)`;
          } else if (scrollOffset.value < -deltaW) {
            scrollOffset.value = -deltaW;
            el.style.transform = `translateX(${scrollOffset.value}px)`;
          }
        });
      }
    }
  };

  const wheelHandler = (evt: WheelEvent) => {
    (evt.deltaX < 0 || evt.deltaX > 0) && evt.preventDefault();
    window.requestAnimationFrame(() => touchOrWheelHandler(evt.deltaX * -1));
  };

  const touchHandler = (evt: WheelEvent) => {
    touchOrWheelHandler(evt.deltaX);
  };

  return { touchHandler, wheelHandler };
}
