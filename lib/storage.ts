export type UploadPayload = {
  name: string;
  type: string;
  size: number;
};

export type UploadResult = {
  url: string;
  signedUrl: string;
};

export async function createUploadUrl(payload: UploadPayload): Promise<UploadResult> {
  return {
    url: `https://storage.example.com/${encodeURIComponent(payload.name)}`,
    signedUrl: `https://storage.example.com/upload/${encodeURIComponent(payload.name)}`
  };
}

export async function tagNoteAsset(
  url: string,
  subject: string,
  tags: string[]
): Promise<{ success: boolean }>
{
  return { success: Boolean(url && subject && tags.length >= 0) };
}
