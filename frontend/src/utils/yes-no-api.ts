import { Ajax } from "./ajax";

export type Answer = {
  answer?: string;
  gif?: string;
}

export function getAnswer(): Ajax<Answer> {
  return new Ajax<Answer>('/api/yesno/');
}
