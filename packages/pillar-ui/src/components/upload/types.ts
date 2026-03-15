export interface UploadFileItem {
  uid: string;
  name: string;
  status: 'ready' | 'success' | 'error' | 'rejected';
  reason?: string;
}

export interface UploadRequestOption {
  file: File;
}

export interface UploadRejectPayload {
  fileName: string;
  reason: string;
}
