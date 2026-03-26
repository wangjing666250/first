import type { ComponentSpec } from './component-spec';

export const uploadSpec: ComponentSpec = {
  key: 'upload',
  title: 'Upload 上传',
  attributes: [
    { name: 'accept', description: '可接受文件类型', type: 'string', default: `''` },
    { name: 'multiple', description: '是否支持多选', type: 'boolean', default: 'false' },
    { name: 'maxSize', description: '最大文件大小（MB）', type: 'number', default: '0' },
    { name: 'beforeUpload', description: '上传前校验钩子', type: '(file: File) => boolean | Promise<boolean>', default: '--' },
    { name: 'request', description: '自定义上传方法', type: '(option) => Promise<void>', default: '--' },
  ],
  events: [
    { name: 'success', description: '上传成功', type: '(fileItem) => void', default: '--' },
    { name: 'error', description: '上传失败', type: '(fileItem, error) => void', default: '--' },
    { name: 'reject', description: '校验拒绝', type: '({ fileName, reason }) => void', default: '--' },
  ],
  slots: [{ name: 'default', description: '上传触发区域内容', type: '--', default: 'Select File' }],
};

