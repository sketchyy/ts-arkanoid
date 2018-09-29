export interface KeyPressed { 
    [s: string]: boolean; 
}

export function trackKeys(keys: string[]): KeyPressed {
  let pressed: KeyPressed = Object.create(null);
  function track(e: KeyboardEvent) {
    if (keys.indexOf(e.key) >= 0) {
      pressed[e.key] = e.type === "keydown";
      e.preventDefault();
    }
  }
  window.addEventListener("keydown", track);
  window.addEventListener("keyup", track);
  return pressed;
}
