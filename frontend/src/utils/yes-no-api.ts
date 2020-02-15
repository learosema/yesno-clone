
export type Answer = {
  answer?: string;
  gif?: string;
}

export async function getAnswer() {
  const response = await fetch('/api/yesno/');
  const data = await response.json();
  return data as Answer;
}
