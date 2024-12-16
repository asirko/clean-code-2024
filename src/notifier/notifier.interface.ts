export const NOTIFIER_TOKEN = Symbol('Notifier');

export interface Notifier {
  send(): void;
  sendWithTemplate?(): void;
  sendWithAttachment?(): void;
}
