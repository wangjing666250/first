<script setup lang="ts">
import { computed, ref } from 'vue';
import { Message } from '@pillar-ui/pillar-ui';
import DemoCodeBlock from './components/DemoCodeBlock.vue';
import MenuSection from './demos/menu/MenuSection.vue';
import PaginationSection from './demos/pagination/PaginationSection.vue';
import TableSection from './demos/table/TableSection.vue';
import type { ComponentSpec } from './specs/component-spec';
import { buttonSpec } from './specs/button.spec';
import { inputSpec } from './specs/input.spec';
import { menuSpec } from './specs/menu.spec';
import { modalSpec } from './specs/modal.spec';
import { paginationSpec } from './specs/pagination.spec';
import { selectSpec } from './specs/select.spec';
import { tableSpec } from './specs/table.spec';
import { tabsSpec } from './specs/tabs.spec';
import { uploadSpec } from './specs/upload.spec';

type DemoView =
  | 'button'
  | 'input'
  | 'textarea'
  | 'space'
  | 'color'
  | 'icon'
  | 'form'
  | 'autocomplete'
  | 'dropdown'
  | 'date-picker'
  | 'form-pro'
  | 'badge'
  | 'modal'
  | 'message'
  | 'popover'
  | 'confirm'
  | 'notification'
  | 'loading'
  | 'table'
  | 'tree'
  | 'menu'
  | 'progress'
  | 'tabs'
  | 'pagination'
  | 'drawer'
  | 'upload';

const activeView = ref<DemoView>('button');

interface NavItem {
  key: string;
  label: string;
  available: boolean;
  badge?: 'beta' | 'coming-soon';
}

const navGroups: Array<{ title: string; items: NavItem[] }> = [
  {
    title: '基础',
    items: [
      { key: 'button', label: 'Button 按钮', available: true },
      { key: 'input', label: 'Input 输入框', available: true },
      { key: 'textarea', label: 'Textarea 文本域', available: true, badge: 'beta' },
      { key: 'space', label: 'Space 间距', available: true, badge: 'beta' },
      { key: 'color', label: 'Color 颜色', available: true, badge: 'beta' },
      { key: 'icon', label: 'Icon 图标', available: true, badge: 'beta' },
    ],
  },
  {
    title: '表单',
    items: [
      { key: 'form', label: 'Select / Radio / Checkbox / Switch', available: true, badge: 'beta' },
      { key: 'autocomplete', label: 'AutoComplete 自动补全', available: true, badge: 'beta' },
      { key: 'upload', label: 'Upload 上传', available: true, badge: 'beta' },
      { key: 'dropdown', label: 'Dropdown 下拉菜单', available: true, badge: 'beta' },
      { key: 'date-picker', label: 'Date 日期选择', available: true, badge: 'beta' },
      { key: 'form-pro', label: 'Form Pro 高级表单', available: true, badge: 'beta' },
    ],
  },
  {
    title: '数据与导航',
    items: [
      { key: 'badge', label: 'Badge 徽章', available: true, badge: 'beta' },
      { key: 'table', label: 'Table 表格', available: true },
      { key: 'pagination', label: 'Pagination 分页', available: true },
      { key: 'tabs', label: 'Tabs 标签页', available: true },
      { key: 'tree', label: 'Tree 树形控件', available: true, badge: 'beta' },
      { key: 'menu', label: 'Menu 菜单', available: true, badge: 'beta' },
      { key: 'progress', label: 'Progress 进度条', available: true, badge: 'beta' },
    ],
  },
  {
    title: '反馈',
    items: [
      { key: 'modal', label: 'Modal 弹窗', available: true, badge: 'beta' },
      { key: 'drawer', label: 'Drawer 抽屉', available: true, badge: 'beta' },
      { key: 'message', label: 'Message 消息提示', available: true, badge: 'beta' },
      { key: 'popover', label: 'Popover 气泡提示', available: true, badge: 'beta' },
      { key: 'confirm', label: 'Confirm 二次确认', available: true, badge: 'beta' },
      { key: 'notification', label: 'Notification 通知', available: true, badge: 'beta' },
      { key: 'loading', label: 'Loading 加载中', available: true, badge: 'beta' },
    ],
  },
];

const topNavItems = ['首页', '组件', '更新日志'];
const navKeyword = ref('');

const docPathMap: Record<DemoView, string> = {
  button: '/components/button',
  input: '/components/input',
  textarea: '/components/textarea',
  space: '/components/space',
  color: '/components/color',
  icon: '/components/icon',
  form: '/components/select',
  autocomplete: '/components/autocomplete',
  dropdown: '/components/dropdown',
  'date-picker': '/components/date-picker',
  'form-pro': '/components/form-pro',
  badge: '/components/badge',
  modal: '/components/modal',
  message: '/components/message',
  popover: '/components/popover',
  confirm: '/components/confirm',
  notification: '/components/notification',
  loading: '/components/loading',
  table: '/components/table',
  tree: '/components/tree',
  menu: '/components/menu',
  progress: '/components/progress',
  tabs: '/components/tabs',
  pagination: '/components/pagination',
  drawer: '/components/drawer',
  upload: '/components/upload',
};

const docsBaseUrl = 'http://localhost:5173';
interface ApiRow {
  name: string;
  description: string;
  type: string;
  default: string;
}

interface ApiDoc {
  attributes: ApiRow[];
  events: ApiRow[];
  slots: ApiRow[];
}

function toApiDoc(spec: ComponentSpec): ApiDoc {
  return {
    attributes: spec.attributes,
    events: spec.events,
    slots: spec.slots,
  };
}

interface CustomRow {
  selector: string;
  description: string;
  sample: string;
}

type CustomVariantKey = 'theme' | 'color' | 'slot';

const apiDocs: Record<DemoView, ApiDoc> = {
  button: {
    attributes: [
      { name: 'type', description: '按钮类型', type: `'default' | 'primary' | 'danger'`, default: `'default'` },
      { name: 'size', description: '按钮尺寸', type: `'small' | 'medium' | 'large'`, default: `'medium'` },
      { name: 'plain', description: '是否朴素按钮', type: 'boolean', default: 'false' },
      { name: 'round', description: '是否圆角按钮', type: 'boolean', default: 'false' },
      { name: 'circle', description: '是否圆形按钮', type: 'boolean', default: 'false' },
      { name: 'loading', description: '是否加载中', type: 'boolean', default: 'false' },
      { name: 'disabled', description: '是否禁用', type: 'boolean', default: 'false' },
      { name: 'nativeType', description: '原生按钮类型', type: `'button' | 'submit' | 'reset'`, default: `'button'` },
    ],
    events: [{ name: 'click', description: '点击按钮触发', type: '(event: MouseEvent) => void', default: '--' }],
    slots: [
      { name: 'default', description: '按钮文本内容', type: '--', default: '--' },
      { name: 'icon', description: '图标内容（配合 circle 或普通按钮）', type: '--', default: '--' },
    ],
  },
  input: {
    attributes: [
      { name: 'modelValue', description: '绑定值', type: 'string', default: `''` },
      { name: 'placeholder', description: '占位文本', type: 'string', default: `''` },
      { name: 'disabled', description: '是否禁用', type: 'boolean', default: 'false' },
      { name: 'clearable', description: '是否显示清空按钮', type: 'boolean', default: 'false' },
    ],
    events: [
      { name: 'update:modelValue', description: '输入值变化', type: '(value: string) => void', default: '--' },
      { name: 'input', description: '输入时触发', type: '(value: string) => void', default: '--' },
      { name: 'clear', description: '点击清空触发', type: '() => void', default: '--' },
    ],
    slots: [
      { name: 'prefix', description: '前缀内容', type: '--', default: '--' },
      { name: 'suffix', description: '后缀内容', type: '--', default: '--' },
    ],
  },
  textarea: {
    attributes: [
      { name: 'modelValue', description: '文本域内容', type: 'string', default: `''` },
      { name: 'rows', description: '可见行数', type: 'number', default: '4' },
      { name: 'placeholder', description: '占位文本', type: 'string', default: `''` },
      { name: 'disabled', description: '是否禁用', type: 'boolean', default: 'false' },
      { name: 'maxlength', description: '最大长度', type: 'number', default: '--' },
    ],
    events: [{ name: 'update:modelValue', description: '输入变化', type: '(value: string) => void', default: '--' }],
    slots: [],
  },
  space: {
    attributes: [
      { name: 'size', description: '间距大小', type: 'number', default: '12' },
      { name: 'direction', description: '排列方向', type: `'horizontal' | 'vertical'`, default: `'horizontal'` },
      { name: 'wrap', description: '是否换行', type: 'boolean', default: 'false' },
    ],
    events: [],
    slots: [{ name: 'default', description: '间距内包裹的元素', type: '--', default: '--' }],
  },
  color: {
    attributes: [
      { name: 'modelValue', description: '当前颜色值', type: 'string', default: `'#409eff'` },
      { name: 'disabled', description: '是否禁用取色', type: 'boolean', default: 'false' },
      { name: 'showPreset', description: '是否展示预设色板', type: 'boolean', default: 'true' },
    ],
    events: [{ name: 'change', description: '颜色变化', type: '(color: string) => void', default: '--' }],
    slots: [],
  },
  icon: {
    attributes: [
      { name: 'name', description: '图标名称', type: 'string', default: '--' },
      { name: 'size', description: '图标大小', type: 'number | string', default: '16' },
      { name: 'color', description: '图标颜色', type: 'string', default: `'currentColor'` },
    ],
    events: [{ name: 'click', description: '点击图标', type: '(name: string) => void', default: '--' }],
    slots: [],
  },
  form: {
    attributes: [
      { name: 'Select.modelValue', description: '下拉当前值', type: 'string', default: `''` },
      { name: 'Select.options', description: '下拉选项列表', type: '{ label: string; value: string }[]', default: '[]' },
      { name: 'Checkbox.modelValue', description: '勾选状态', type: 'boolean', default: 'false' },
      { name: 'Radio.modelValue', description: '单选当前值', type: 'string | number', default: `''` },
      { name: 'Switch.modelValue', description: '开关状态', type: 'boolean', default: 'false' },
      { name: 'disabled', description: '禁用状态（以上组件通用）', type: 'boolean', default: 'false' },
    ],
    events: [
      { name: 'change', description: '值变化时触发', type: '(value) => void', default: '--' },
      { name: 'update:modelValue', description: 'v-model 更新', type: '(value) => void', default: '--' },
    ],
    slots: [{ name: 'default', description: 'Checkbox/Radio 标签文本', type: '--', default: '--' }],
  },
  autocomplete: {
    attributes: [
      { name: 'modelValue', description: '输入值', type: 'string', default: `''` },
      { name: 'options', description: '候选数据', type: '{ label: string; value: string }[]', default: '[]' },
      { name: 'placeholder', description: '占位文本', type: 'string', default: `''` },
      { name: 'debounce', description: '输入防抖时间（ms）', type: 'number', default: '200' },
      { name: 'highlight', description: '是否高亮匹配项', type: 'boolean', default: 'true' },
    ],
    events: [
      { name: 'update:modelValue', description: '输入值变化', type: '(value: string) => void', default: '--' },
      { name: 'select', description: '选择某一项时触发', type: '(option) => void', default: '--' },
    ],
    slots: [{ name: 'empty', description: '无匹配结果时展示内容', type: '--', default: '--' }],
  },
  dropdown: {
    attributes: [
      { name: 'modelValue', description: '当前选中值', type: 'string', default: `''` },
      { name: 'options', description: '下拉选项', type: '{ label: string; value: string }[]', default: '[]' },
      { name: 'trigger', description: '触发方式', type: `'click' | 'hover'`, default: `'click'` },
      { name: 'disabled', description: '是否禁用', type: 'boolean', default: 'false' },
    ],
    events: [{ name: 'change', description: '选项变化', type: '(value: string) => void', default: '--' }],
    slots: [],
  },
  'date-picker': {
    attributes: [
      { name: 'modelValue', description: '日期值', type: 'string', default: `''` },
      { name: 'type', description: '日期类型', type: `'date' | 'datetime-local'`, default: `'date'` },
      { name: 'disabled', description: '是否禁用', type: 'boolean', default: 'false' },
      { name: 'min/max', description: '可选范围', type: 'string', default: '--' },
    ],
    events: [{ name: 'change', description: '日期变化', type: '(value: string) => void', default: '--' }],
    slots: [],
  },
  'form-pro': {
    attributes: [
      { name: 'model', description: '表单模型对象', type: 'Record<string, unknown>', default: '{}' },
      { name: 'rules', description: '校验规则', type: 'Rule[]', default: '[]' },
      { name: 'layout', description: '布局模式', type: `'inline' | 'vertical'`, default: `'vertical'` },
      { name: 'labelWidth', description: '标签宽度', type: 'number | string', default: `'96'` },
    ],
    events: [
      { name: 'submit', description: '提交成功', type: '(model) => void', default: '--' },
      { name: 'validate-error', description: '校验失败', type: '(errors) => void', default: '--' },
    ],
    slots: [{ name: 'default', description: '表单项内容', type: '--', default: '--' }],
  },
  badge: {
    attributes: [
      { name: 'value', description: '徽章内容', type: 'string | number', default: '--' },
      { name: 'type', description: '徽章类型', type: `'primary' | 'success' | 'warning' | 'danger'`, default: `'primary'` },
      { name: 'dot', description: '是否小圆点', type: 'boolean', default: 'false' },
      { name: 'max', description: '最大显示阈值', type: 'number', default: '--' },
    ],
    events: [],
    slots: [{ name: 'default', description: '被徽章包裹内容', type: '--', default: '--' }],
  },
  modal: {
    attributes: [
      { name: 'modelValue', description: '是否显示弹窗', type: 'boolean', default: 'false' },
      { name: 'title', description: '标题文本', type: 'string', default: `'提示'` },
      { name: 'width', description: '弹窗宽度', type: 'string', default: `'520px'` },
      { name: 'closeOnMask', description: '点击遮罩是否关闭', type: 'boolean', default: 'true' },
    ],
    events: [
      { name: 'update:modelValue', description: '显示状态变化', type: '(visible: boolean) => void', default: '--' },
      { name: 'confirm', description: '点击确认触发', type: '() => void', default: '--' },
      { name: 'cancel', description: '点击取消或遮罩关闭触发', type: '() => void', default: '--' },
    ],
    slots: [
      { name: 'default', description: '弹窗内容区域', type: '--', default: '--' },
      { name: 'footer', description: '底部按钮区域', type: '--', default: '内置取消/确认' },
    ],
  },
  message: {
    attributes: [
      { name: 'message', description: '消息文本', type: 'string', default: '--' },
      { name: 'type', description: '消息类型', type: `'info' | 'success' | 'error'`, default: `'info'` },
      { name: 'duration', description: '自动关闭时间（ms）', type: 'number', default: '2200' },
    ],
    events: [],
    slots: [],
  },
  popover: {
    attributes: [
      { name: 'content', description: '气泡内容', type: 'string', default: '--' },
      { name: 'trigger', description: '触发方式', type: `'hover' | 'click'`, default: `'hover'` },
      { name: 'placement', description: '弹出方向', type: `'top' | 'bottom' | 'left' | 'right'`, default: `'top'` },
    ],
    events: [{ name: 'visible-change', description: '显隐变化', type: '(visible: boolean) => void', default: '--' }],
    slots: [
      { name: 'default', description: '触发区域', type: '--', default: '--' },
      { name: 'content', description: '气泡内容区域', type: '--', default: '--' },
    ],
  },
  confirm: {
    attributes: [
      { name: 'title', description: '确认标题', type: 'string', default: `'请确认'` },
      { name: 'content', description: '确认内容', type: 'string', default: '--' },
      { name: 'confirmType', description: '确认按钮类型', type: `'primary' | 'danger'`, default: `'primary'` },
      { name: 'closeOnMask', description: '点击遮罩是否可关闭', type: 'boolean', default: 'false' },
    ],
    events: [
      { name: 'confirm', description: '点击确认', type: '() => void', default: '--' },
      { name: 'cancel', description: '点击取消', type: '() => void', default: '--' },
    ],
    slots: [],
  },
  notification: {
    attributes: [
      { name: 'title', description: '通知标题', type: 'string', default: '--' },
      { name: 'message', description: '通知内容', type: 'string', default: '--' },
      { name: 'type', description: '通知类型', type: `'info' | 'success' | 'warning' | 'error'`, default: `'info'` },
      { name: 'duration', description: '自动关闭时间', type: 'number', default: '3000' },
    ],
    events: [{ name: 'close', description: '关闭通知', type: '(id: number) => void', default: '--' }],
    slots: [],
  },
  loading: {
    attributes: [
      { name: 'loading', description: '是否显示加载态', type: 'boolean', default: 'false' },
      { name: 'text', description: '加载文案', type: 'string', default: `'加载中...'` },
      { name: 'fullscreen', description: '是否全屏加载', type: 'boolean', default: 'false' },
    ],
    events: [],
    slots: [],
  },
  table: {
    attributes: [
      { name: 'columns', description: '列配置', type: '{ key: string; title: string }[]', default: '[]' },
      { name: 'data', description: '表格数据', type: 'Record<string, unknown>[]', default: '[]' },
      { name: 'striped', description: '是否斑马纹', type: 'boolean', default: 'false' },
      { name: 'bordered', description: '是否显示边框', type: 'boolean', default: 'true' },
    ],
    events: [],
    slots: [],
  },
  tree: {
    attributes: [
      { name: 'data', description: '树节点数据', type: 'TreeNode[]', default: '[]' },
      { name: 'defaultExpandAll', description: '默认展开全部', type: 'boolean', default: 'false' },
      { name: 'expandOnClickNode', description: '点击节点是否展开', type: 'boolean', default: 'true' },
    ],
    events: [
      { name: 'node-click', description: '点击节点', type: '(node) => void', default: '--' },
      { name: 'expand-change', description: '展开变化', type: '(node, expanded) => void', default: '--' },
    ],
    slots: [{ name: 'default', description: '自定义节点内容', type: '--', default: '--' }],
  },
  menu: {
    attributes: [
      { name: 'active', description: '当前激活菜单', type: 'string', default: `''` },
      { name: 'mode', description: '菜单模式', type: `'horizontal' | 'vertical'`, default: `'horizontal'` },
      { name: 'collapsed', description: '是否折叠', type: 'boolean', default: 'false' },
    ],
    events: [{ name: 'select', description: '菜单选择', type: '(key: string) => void', default: '--' }],
    slots: [{ name: 'default', description: '菜单项内容', type: '--', default: '--' }],
  },
  progress: {
    attributes: [
      { name: 'percentage', description: '进度值', type: 'number', default: '0' },
      { name: 'status', description: '状态', type: `'default' | 'success' | 'warning' | 'error'`, default: `'default'` },
      { name: 'showText', description: '是否显示文字', type: 'boolean', default: 'true' },
      { name: 'strokeWidth', description: '线条宽度', type: 'number', default: '8' },
    ],
    events: [],
    slots: [],
  },
  tabs: {
    attributes: [
      { name: 'modelValue', description: '当前激活 tab 值', type: 'string', default: `''` },
      { name: 'items', description: '选项配置', type: '{ label: string; value: string; disabled?: boolean }[]', default: '[]' },
    ],
    events: [
      { name: 'update:modelValue', description: '切换 tab 时触发', type: '(value: string) => void', default: '--' },
      { name: 'change', description: '切换 tab 时触发', type: '(value: string) => void', default: '--' },
    ],
    slots: [],
  },
  pagination: {
    attributes: [
      { name: 'modelValue', description: '当前页码', type: 'number', default: '1' },
      { name: 'total', description: '总条数', type: 'number', default: '0' },
      { name: 'pageSize', description: '每页条数', type: 'number', default: '10' },
    ],
    events: [
      { name: 'update:modelValue', description: '页码变化时触发', type: '(page: number) => void', default: '--' },
      { name: 'change', description: '页码变化时触发', type: '(page: number) => void', default: '--' },
    ],
    slots: [],
  },
  drawer: {
    attributes: [
      { name: 'modelValue', description: '是否显示抽屉', type: 'boolean', default: 'false' },
      { name: 'title', description: '抽屉标题', type: 'string', default: `'抽屉'` },
      { name: 'size', description: '抽屉宽度', type: 'string', default: `'360px'` },
      { name: 'placement', description: '打开方向', type: `'left' | 'right'`, default: `'right'` },
      { name: 'closeOnMask', description: '点击遮罩是否关闭', type: 'boolean', default: 'true' },
    ],
    events: [
      { name: 'update:modelValue', description: '显示状态变化', type: '(visible: boolean) => void', default: '--' },
      { name: 'close', description: '关闭时触发', type: '() => void', default: '--' },
    ],
    slots: [{ name: 'default', description: '抽屉内容区域', type: '--', default: '--' }],
  },
  upload: {
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
  },
};

const specApiDocs: Partial<Record<DemoView, ApiDoc>> = {
  button: toApiDoc(buttonSpec),
  input: toApiDoc(inputSpec),
  menu: toApiDoc(menuSpec),
  modal: toApiDoc(modalSpec),
  pagination: toApiDoc(paginationSpec),
  form: toApiDoc(selectSpec),
  table: toApiDoc(tableSpec),
  tabs: toApiDoc(tabsSpec),
  upload: toApiDoc(uploadSpec),
};

const demoCode = {
  buttonType: `<XxButton>默认按钮</XxButton>
<XxButton type="primary">主按钮</XxButton>
<XxButton type="danger">危险按钮</XxButton>`,
  buttonShape: `<XxButton size="small">小号</XxButton>
<XxButton size="medium">中号</XxButton>
<XxButton size="large">大号</XxButton>
<XxButton type="primary" plain>朴素按钮</XxButton>
<XxButton round>圆角按钮</XxButton>
<XxButton circle><template #icon>+</template></XxButton>`,
  buttonState: `<XxButton type="primary" :loading="true">加载中</XxButton>
<XxButton :disabled="true">已禁用</XxButton>`,
  buttonNative: `<form @submit="onSubmitDemo" @reset="inputValue = ''">
  <XxInput v-model="inputValue" placeholder="输入后点击提交或重置" />
  <XxButton type="primary" native-type="submit">提交</XxButton>
  <XxButton native-type="reset">重置</XxButton>
</form>`,
  inputBasic: `<XxInput v-model="inputValue" placeholder="请输入内容" clearable @clear="onInputClear">
  <template #prefix>🔍</template>
  <template #suffix>{{ inputValue.length }}/20</template>
</XxInput>`,
  inputDisabled: `<XxInput model-value="该输入框已禁用" disabled />`,
  textareaBasic: `<XxTextarea v-model="textareaValue" :rows="5" placeholder="请输入详细说明..." />`,
  spaceBasic: `<XxSpace :size="spaceGap" wrap>
  <XxButton size="small">按钮 A</XxButton>
  <XxButton size="small">按钮 B</XxButton>
  <XxButton size="small">按钮 C</XxButton>
</XxSpace>`,
  colorBasic: `<XxColor v-model="selectedColor" @change="onColorChange" />`,
  iconBasic: `<XxIcon name="⭐" @click="onSelectIcon('⭐')" />
<XxIcon name="🚀" @click="onSelectIcon('🚀')" />
<XxIcon name="✅" @click="onSelectIcon('✅')" />`,
  formSelect: `<XxSelect v-model="selectedFramework" :options="selectOptions" placeholder="请选择框架" />
<XxSelect :model-value="'vue'" :options="selectOptions" disabled />`,
  formCheckbox: `<XxCheckbox v-model="checked">我已阅读并同意协议</XxCheckbox>
<XxCheckbox :model-value="true" disabled>禁用且选中</XxCheckbox>`,
  formRadio: `<XxRadio v-model="radioValue" value="a">方案 A</XxRadio>
<XxRadio v-model="radioValue" value="b">方案 B</XxRadio>
<XxRadio :model-value="radioValue" value="c" disabled>方案 C（禁用）</XxRadio>`,
  formSwitch: `<XxSwitch v-model="enabled" />
<XxSwitch :model-value="true" disabled />`,
  autoHighlight: `<XxAutoComplete v-model="keyword" :options="options" placeholder="请输入关键词">
  <template #empty><span style="color: #f56c6c">没有匹配结果</span></template>
</XxAutoComplete>`,
  autoPlain: `<XxAutoComplete
  v-model="keywordPlain"
  :options="options"
  :highlight="false"
  placeholder="不高亮匹配模式"
/>`,
  dropdownBasic: `<XxDropdown v-model="dropdownValue" :options="dropdownOptions" placeholder="请选择操作" />`,
  dateBasic: `<XxDatePicker v-model="dateValue" type="date" />
<XxDatePicker v-model="dateTimeValue" type="datetime-local" />`,
  formPro: `<XxFormPro :model="formPro" :rules="formProRules" @submit="onFormProSubmit" @validate-error="onFormProError">
  <XxInput v-model="formPro.name" placeholder="姓名" />
  <XxInput v-model="formPro.email" placeholder="邮箱" />
  <XxSelect v-model="formPro.role" :options="selectOptions" placeholder="请选择角色" />
</XxFormPro>`,
  badgeBasic: `<XxBadge :value="12"><XxButton>待处理</XxButton></XxBadge>
<XxBadge dot type="danger"><XxButton plain>新消息</XxButton></XxBadge>`,
  modalBasic: `<XxButton type="primary" @click="modalVisible = true">普通弹窗</XxButton>
<XxModal v-model="modalVisible" title="操作确认" @confirm="onModalConfirm">
  普通场景：点击遮罩可关闭。
</XxModal>`,
  modalStrict: `<XxButton type="danger" @click="strictModalVisible = true">关键操作弹窗</XxButton>
<XxModal
  v-model="strictModalVisible"
  title="高风险确认"
  width="600px"
  :close-on-mask="false"
  @confirm="onStrictModalConfirm"
  @cancel="onStrictModalCancel"
>
  高风险场景：禁止点击遮罩关闭，请明确选择“取消”或“确认”。
</XxModal>`,
  messageBasic: `<XxButton @click="showMessage('info', '普通提示')">信息</XxButton>
<XxButton @click="showMessage('success', '操作成功')">成功</XxButton>
<XxButton @click="showMessage('error', '操作失败')">错误</XxButton>`,
  popoverBasic: `<XxPopover content="这里是 Popover 内容">
  <XxButton>鼠标悬停查看</XxButton>
</XxPopover>`,
  confirmBasic: `<XxButton type="danger" @click="confirmVisible = true">删除数据</XxButton>
<XxConfirm
  v-model="confirmVisible"
  title="二次确认"
  content="删除后不可恢复，请确认是否继续？"
  confirm-type="danger"
  @confirm="onConfirmDelete"
  @cancel="onCancelDelete"
/>`,
  notificationBasic: `<XxButton type="primary" @click="pushNotification('success')">成功通知</XxButton>
<XxButton @click="pushNotification('info')">普通通知</XxButton>
<XxNotification :list="notifications" @close="removeNotification" />`,
  loadingBasic: `<XxLoading :loading="loadingDemo" text="加载中，请稍候...">
  <XxButton type="primary" @click="toggleLoading">切换加载</XxButton>
</XxLoading>`,
  tableStriped: `<XxTable :columns="columns" :data="tableData" striped />`,
  tableBorderless: `<XxTable :columns="columns" :data="tableData" :bordered="false" />`,
  tableEmpty: `<XxTable :columns="columns" :data="[]" />`,
  tabs: `<XxTabs
  v-model="currentTab"
  :items="[
    { label: '基础设置', value: 'basic' },
    { label: '高级设置', value: 'advanced' },
    { label: '禁用项', value: 'disabled', disabled: true },
  ]"
/>`,
  pageBasic: `<XxPagination v-model="page" :total="96" :page-size="10" />`,
  pageSmall: `<XxPagination v-model="smallPage" :total="15" :page-size="10" />`,
  drawerNormal: `<XxButton type="primary" @click="openDrawer('right')">从右侧打开</XxButton>
<XxButton @click="openDrawer('left')">从左侧打开</XxButton>
<XxDrawer v-model="drawerVisible" title="用户详情" :placement="drawerPlacement" size="420px">
  这里是抽屉内容区域
</XxDrawer>`,
  drawerStrict: `<XxButton type="danger" @click="strictDrawerVisible = true">严格模式抽屉</XxButton>
<XxDrawer v-model="strictDrawerVisible" title="严格模式抽屉" :close-on-mask="false">
  当前抽屉禁止点击遮罩关闭，只能点右上角关闭按钮。
</XxDrawer>`,
  treeBasic: `<XxTree :data="treeData" default-expand-all @node-click="onTreeNodeClick" />`,
  menuBasic: `<XxMenu :active="menuActive" :items="menuItems" @update:active="setMenuActive" />`,
  menuDark: `<div class="menu-theme-dark">
  <XxMenu :active="menuDarkActive" :items="menuItems" @update:active="menuDarkActive = $event" />
</div>`,
  menuBrand: `<div class="menu-theme-brand">
  <XxMenu :active="menuBrandActive" :items="menuItems" @update:active="menuBrandActive = $event" />
</div>`,
  menuVertical: `<div class="menu-theme-vertical">
  <XxMenu
    :active="menuVerticalActive"
    :items="menuItems"
    mode="vertical"
    @update:active="menuVerticalActive = $event"
  />
</div>`,
  progressBasic: `<XxProgress :percentage="progressValue" status="success" />`,
  uploadSingle: `<XxUpload
  accept=".png,image/png"
  :max-size="0.1"
  :request="fakeUpload"
  @success="onUploadSuccess"
  @reject="onUploadReject"
  @error="onUploadError"
/>`,
  uploadMulti: `<XxUpload
  accept=".png,image/png"
  multiple
  :max-size="0.3"
  :before-upload="beforeUploadNameCheck"
  :request="fakeMultiUpload"
  @success="onMultiUploadSuccess"
  @reject="onMultiUploadReject"
  @error="onMultiUploadError"
>
  <span>选择多个文件（示例规则：文件名包含 ok）</span>
</XxUpload>`,
};

const customDemoCode: Record<DemoView, string> = {
  button: `<div class="custom-button">
  <XxButton type="primary">主按钮</XxButton>
  <XxButton round style="margin-left: 8px">圆角按钮</XxButton>
</div>`,
  input: `<div class="custom-input"><XxInput v-model="inputValue" placeholder="自定义输入框" /></div>`,
  textarea: `<div class="custom-textarea"><XxTextarea v-model="textareaValue" :rows="4" /></div>`,
  space: `<div class="custom-space"><XxSpace :size="spaceGap"><XxButton>按钮 A</XxButton><XxButton>按钮 B</XxButton></XxSpace></div>`,
  color: `<div class="custom-color"><XxColor v-model="selectedColor" /></div>`,
  icon: `<div class="custom-icon"><XxIcon name="⭐" :size="20" /><XxIcon name="🚀" :size="20" /></div>`,
  form: `<div class="custom-form"><XxSelect v-model="selectedFramework" :options="selectOptions" /></div>`,
  autocomplete: `<div class="custom-autocomplete"><XxAutoComplete v-model="keyword" :options="options" /></div>`,
  dropdown: `<div class="custom-dropdown"><XxDropdown v-model="dropdownValue" :options="dropdownOptions" /></div>`,
  'date-picker': `<div class="custom-date-picker"><XxDatePicker v-model="dateValue" type="date" /></div>`,
  'form-pro': `<div class="custom-form-pro"><XxFormPro :model="formPro" :rules="formProRules"><XxInput v-model="formPro.name" /></XxFormPro></div>`,
  badge: `<div class="custom-badge"><XxBadge :value="12"><XxButton>待处理</XxButton></XxBadge></div>`,
  modal: `<div class="custom-modal"><XxButton type="primary" @click="modalVisible = true">打开弹窗</XxButton></div>`,
  message: `<div class="custom-message"><XxButton @click="showMessage('success', '自定义成功消息')">触发消息</XxButton></div>`,
  popover: `<div class="custom-popover"><XxPopover content="自定义气泡内容"><XxButton>悬停查看</XxButton></XxPopover></div>`,
  confirm: `<div class="custom-confirm"><XxButton type="danger" @click="confirmVisible = true">触发确认</XxButton></div>`,
  notification: `<div class="custom-notification"><XxButton @click="pushNotification('success')">添加通知</XxButton></div>`,
  loading: `<div class="custom-loading"><XxLoading :loading="loadingDemo"><XxButton @click="toggleLoading">切换</XxButton></XxLoading></div>`,
  table: `<div class="custom-table"><XxTable :columns="columns" :data="tableData" striped /></div>`,
  tree: `<div class="custom-tree"><XxTree :data="treeData" default-expand-all /></div>`,
  menu: `<div class="menu-theme-brand"><XxMenu :active="menuBrandActive" :items="menuItems" @update:active="menuBrandActive = $event" /></div>`,
  progress: `<div class="custom-progress"><XxProgress :percentage="progressValue" status="success" /></div>`,
  tabs: `<div class="custom-tabs"><XxTabs v-model="currentTab" :items="[{ label: 'A', value: 'basic' }, { label: 'B', value: 'advanced' }]" /></div>`,
  pagination: `<div class="custom-pagination"><XxPagination v-model="page" :total="96" :page-size="10" /></div>`,
  drawer: `<div class="custom-drawer"><XxButton type="primary" @click="openDrawer('right')">打开抽屉</XxButton></div>`,
  upload: `<div class="custom-upload"><XxUpload accept=".png,image/png" :max-size="0.1" :request="fakeUpload" /></div>`,
};

const customVariants: Array<{ key: CustomVariantKey; title: string; desc: string }> = [
  { key: 'theme', title: '设置 Theme 风格', desc: '通过主题级样式覆盖，统一组件明暗风格。' },
  { key: 'color', title: '自定义颜色', desc: '通过业务类名覆盖主色、边框色和激活态。' },
  { key: 'slot', title: '插槽/结构扩展', desc: '通过插槽或结构扩展实现更灵活的业务 UI。' },
];

function getCustomCode(view: DemoView, variant: CustomVariantKey): string {
  if (view === 'menu') {
    if (variant === 'theme') return demoCode.menuDark;
    if (variant === 'color') return demoCode.menuBrand;
    return demoCode.menuVertical;
  }
  const label: Record<CustomVariantKey, string> = {
    theme: 'Theme 风格定制',
    color: '颜色定制',
    slot: '插槽/结构扩展',
  };
  return `${customDemoCode[view]}\n\n// ${label[variant]}`;
}

const customDocs: Record<DemoView, CustomRow[]> = {
  button: [
    { selector: '.xx-button--primary', description: '主按钮配色', sample: 'background: #2563eb;' },
    { selector: '.xx-button.is-round', description: '圆角形态', sample: 'border-radius: 999px;' },
    { selector: '.xx-button__icon', description: '图标间距/尺寸', sample: 'margin-right: 6px;' },
  ],
  input: [
    { selector: '.xx-input-wrap', description: '输入框容器边框/圆角', sample: 'border-radius: 10px;' },
    { selector: '.xx-input__prefix', description: '前缀区域样式', sample: 'color: #2563eb;' },
    { selector: '.xx-input__suffix', description: '后缀区域样式', sample: 'font-weight: 600;' },
  ],
  textarea: [
    { selector: '.xx-textarea', description: '文本域尺寸与边框', sample: 'min-height: 120px;' },
    { selector: '.xx-textarea:focus', description: '聚焦态视觉反馈', sample: 'border-color: #2563eb;' },
    { selector: '.xx-textarea:disabled', description: '禁用态样式', sample: 'background: #f3f4f6;' },
  ],
  space: [
    { selector: '.xx-space', description: '容器对齐和布局', sample: 'align-items: center;' },
    { selector: 'direction prop', description: '纵向/横向布局', sample: "direction='vertical'" },
    { selector: 'wrap prop', description: '换行行为', sample: ':wrap="true"' },
  ],
  color: [
    { selector: '.xx-color__picker', description: '取色器尺寸', sample: 'width: 40px;' },
    { selector: '.xx-color__dot', description: '预设色块形状', sample: 'border-radius: 6px;' },
    { selector: '.xx-color__value', description: '颜色值字体', sample: 'font-family: monospace;' },
  ],
  icon: [
    { selector: '.xx-icon', description: '图标颜色/动效', sample: 'transition: color .2s;' },
    { selector: ':hover', description: '悬停颜色反馈', sample: 'color: #2563eb;' },
    { selector: 'default slot', description: '自定义 SVG/字符', sample: '<template #default>...</template>' },
  ],
  form: [
    { selector: '.xx-select/.xx-checkbox/.xx-radio/.xx-switch', description: '统一表单风格', sample: 'border-radius: 8px;' },
    { selector: 'disabled prop', description: '统一禁用态', sample: ':disabled="true"' },
    { selector: 'label slot', description: 'Checkbox/Radio 文案结构', sample: '<XxCheckbox>说明</XxCheckbox>' },
  ],
  autocomplete: [
    { selector: '.xx-autocomplete__input', description: '输入区样式', sample: 'height: 36px;' },
    { selector: '.xx-autocomplete__panel', description: '下拉面板阴影', sample: 'box-shadow: 0 8px 24px rgba(...);' },
    { selector: 'empty slot', description: '空状态内容', sample: '<template #empty>暂无数据</template>' },
  ],
  dropdown: [
    { selector: '.xx-dropdown', description: '下拉框尺寸', sample: 'min-width: 220px;' },
    { selector: '.xx-dropdown:focus', description: '聚焦态样式', sample: 'border-color: #2563eb;' },
    { selector: '.xx-dropdown:disabled', description: '禁用态样式', sample: 'color: #9ca3af;' },
  ],
  'date-picker': [
    { selector: '.xx-date-picker', description: '日期输入框样式', sample: 'height: 36px;' },
    { selector: '.xx-date-picker:focus', description: '聚焦态边框', sample: 'border-color: #2563eb;' },
    { selector: 'min/max prop', description: '限制可选范围', sample: ':min="yyyy-mm-dd"' },
  ],
  'form-pro': [
    { selector: '.xx-form-pro__content', description: '表单项间距', sample: 'gap: 12px;' },
    { selector: '.xx-form-pro__actions', description: '底部按钮布局', sample: 'justify-content: flex-end;' },
    { selector: 'actions slot', description: '自定义操作区', sample: '<template #actions>...</template>' },
  ],
  badge: [
    { selector: '.xx-badge', description: '数字徽章尺寸/圆角', sample: 'min-width: 20px;' },
    { selector: '.xx-badge.is-dot', description: '点状徽章大小', sample: 'width: 8px; height: 8px;' },
    { selector: '.xx-badge-wrap', description: '与主体内容对齐', sample: 'display: inline-flex;' },
  ],
  modal: [
    { selector: '.xx-modal__mask', description: '遮罩透明度', sample: 'background: rgba(0,0,0,.45);' },
    { selector: '.xx-modal__panel', description: '面板圆角/阴影', sample: 'border-radius: 14px;' },
    { selector: 'footer slot', description: '自定义底部按钮', sample: '<template #footer>...</template>' },
  ],
  message: [
    { selector: '.xx-message', description: '消息容器样式', sample: 'border-radius: 10px;' },
    { selector: '.xx-message--success', description: '成功态颜色', sample: 'background: #ecfdf5;' },
    { selector: '业务封装', description: '统一调用参数', sample: "message.success('保存成功')" },
  ],
  popover: [
    { selector: '.xx-popover__panel', description: '气泡面板样式', sample: 'border-radius: 10px;' },
    { selector: '.xx-popover__panel.is-top', description: '不同方向样式', sample: 'margin-bottom: 8px;' },
    { selector: 'content slot', description: '复杂提示内容', sample: '<template #content>...</template>' },
  ],
  confirm: [
    { selector: '.xx-confirm__panel', description: '确认框容器样式', sample: 'border-radius: 12px;' },
    { selector: '.xx-confirm__header', description: '标题语义样式', sample: 'color: #b91c1c;' },
    { selector: '.xx-confirm__footer', description: '按钮区布局', sample: 'justify-content: flex-end;' },
  ],
  notification: [
    { selector: '.xx-notification__item', description: '通知卡片样式', sample: 'border-radius: 8px;' },
    { selector: '.xx-notification__item.is-error', description: '错误态强调', sample: 'border-left: 4px solid #ef4444;' },
    { selector: '.xx-notification__header button', description: '关闭按钮样式', sample: 'color: #6b7280;' },
  ],
  loading: [
    { selector: '.xx-loading-mask', description: '遮罩层样式', sample: 'background: rgba(15,23,42,.35);' },
    { selector: '.xx-loading-spinner', description: '加载器尺寸/动画', sample: 'width: 20px; height: 20px;' },
    { selector: '.xx-loading-wrap.is-fullscreen', description: '全屏层级', sample: 'z-index: 2000;' },
  ],
  table: [
    { selector: '.xx-table', description: '表格整体样式', sample: 'border-radius: 10px;' },
    { selector: '.xx-table.is-striped', description: '斑马纹行色', sample: 'tbody tr:nth-child(2n) {...}' },
    { selector: '.xx-table.is-bordered', description: '边框强度', sample: 'border-color: #e5e7eb;' },
  ],
  tree: [
    { selector: '.xx-tree__label', description: '节点行样式', sample: 'padding: 2px 6px;' },
    { selector: '.xx-tree__arrow', description: '展开箭头样式', sample: 'color: #64748b;' },
    { selector: '.xx-tree__node', description: '层级间距', sample: 'margin-top: 4px;' },
  ],
  menu: [
    { selector: '.xx-menu__item', description: '菜单项样式', sample: 'padding: 8px 14px;' },
    { selector: '.xx-menu__item.is-active', description: '激活态样式', sample: 'background: #1d4ed8; color: #fff;' },
    { selector: '.xx-menu.is-vertical', description: '纵向布局', sample: 'display: grid;' },
  ],
  progress: [
    { selector: '.xx-progress__track', description: '轨道样式', sample: 'border-radius: 999px;' },
    { selector: '.xx-progress__bar.is-success', description: '成功态渐变', sample: 'background: linear-gradient(...);' },
    { selector: '.xx-progress__text', description: '百分比文本', sample: 'font-weight: 600;' },
  ],
  tabs: [
    { selector: '.xx-tabs__tab', description: '标签按钮样式', sample: 'padding: 8px 14px;' },
    { selector: '.xx-tabs__tab.is-active', description: '激活态高亮', sample: 'color: #1d4ed8;' },
    { selector: '.xx-tabs__tab:disabled', description: '禁用态样式', sample: 'opacity: .5;' },
  ],
  pagination: [
    { selector: '.xx-pagination__btn', description: '页码按钮样式', sample: 'min-width: 32px;' },
    { selector: '.xx-pagination__btn.is-active', description: '当前页样式', sample: 'background: #2563eb; color: #fff;' },
    { selector: '.xx-pagination__btn:disabled', description: '禁用按钮样式', sample: 'opacity: .45;' },
  ],
  drawer: [
    { selector: '.xx-drawer__panel', description: '抽屉面板样式', sample: 'border-radius: 12px 0 0 12px;' },
    { selector: '.xx-drawer__header', description: '头部布局', sample: 'padding: 16px;' },
    { selector: '.xx-drawer__mask', description: '遮罩透明度', sample: 'background: rgba(0,0,0,.45);' },
  ],
  upload: [
    { selector: '.xx-upload__trigger', description: '上传触发区样式', sample: 'border: 1px dashed #94a3b8;' },
    { selector: '.xx-upload__item', description: '文件项样式', sample: 'font-size: 13px;' },
    { selector: 'default slot', description: '自定义上传入口', sample: '<XxUpload><span>自定义入口</span></XxUpload>' },
  ],
};

const inputValue = ref('');
const textareaValue = ref('');
const keyword = ref('');
const keywordPlain = ref('');
const selectedFramework = ref('');
const dropdownValue = ref('');
const dateValue = ref('');
const dateTimeValue = ref('');
const selectedColor = ref('#409eff');
const pickedIcon = ref('⭐');
const spaceGap = ref(12);
const checked = ref(false);
const radioValue = ref<'a' | 'b'>('a');
const enabled = ref(true);

const modalVisible = ref(false);
const strictModalVisible = ref(false);
const confirmVisible = ref(false);

const drawerVisible = ref(false);
const strictDrawerVisible = ref(false);
const drawerPlacement = ref<'left' | 'right'>('right');

const currentTab = ref<'basic' | 'advanced'>('basic');
const page = ref(1);
const smallPage = ref(2);
const menuActive = ref<'dashboard' | 'users' | 'settings'>('dashboard');
const menuDarkActive = ref<'dashboard' | 'users' | 'settings'>('dashboard');
const menuBrandActive = ref<'dashboard' | 'users' | 'settings'>('dashboard');
const menuVerticalActive = ref<'dashboard' | 'users' | 'settings'>('dashboard');
const progressValue = ref(62);
const loadingDemo = ref(false);

const uploadResult = ref('暂未上传文件');
const multiUploadResult = ref('暂未上传文件');
const inputClearCount = ref(0);
const formSubmitCount = ref(0);
const formPro = ref({
  name: '',
  email: '',
  role: '',
});
const formProErrors = ref<string[]>([]);
const notifications = ref<Array<{ id: number; title: string; message: string; type: 'info' | 'success' | 'warning' | 'error' }>>([]);

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'Vite', value: 'vite' },
  { label: 'Vitest', value: 'vitest' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Node.js', value: 'nodejs' },
];

const selectOptions = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Svelte', value: 'svelte' },
];

const dropdownOptions = [
  { label: '新建项目', value: 'create' },
  { label: '复制链接', value: 'copy' },
  { label: '归档项目', value: 'archive' },
];

const menuItems: Array<{ key: 'dashboard' | 'users' | 'settings'; label: string }> = [
  { key: 'dashboard', label: '工作台' },
  { key: 'users', label: '用户管理' },
  { key: 'settings', label: '系统设置' },
];

const treeData = [
  {
    key: 'design',
    label: '设计规范',
    children: [
      { key: 'design-color', label: '色彩规范' },
      { key: 'design-space', label: '间距规范' },
    ],
  },
  {
    key: 'business',
    label: '业务组件',
    children: [
      { key: 'business-approval', label: '审批流' },
      { key: 'business-report', label: '报表中心' },
    ],
  },
];

const formProRules = [
  { field: 'name', required: true, message: '姓名不能为空' },
  {
    field: 'email',
    validator: (value: unknown) => (typeof value === 'string' && value.includes('@') ? null : '邮箱格式不正确'),
  },
  { field: 'role', required: true, message: '请选择角色' },
];

const columns = [
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
  { key: 'risk', title: '风险等级' },
];

const tableData = [
  { name: '张三', role: '管理员', status: '启用', risk: '低' },
  { name: '李四', role: '运营', status: '禁用', risk: '中' },
  { name: '王五', role: '访客', status: '启用', risk: '高' },
];

function showMessage(type: 'info' | 'success' | 'error', text: string): void {
  Message({
    message: text,
    type,
  });
}

function onModalConfirm(): void {
  modalVisible.value = false;
  Message({ message: '确认成功', type: 'success' });
}

function onStrictModalConfirm(): void {
  strictModalVisible.value = false;
  Message({ message: '已执行关键操作', type: 'error' });
}

function onStrictModalCancel(): void {
  strictModalVisible.value = false;
  Message({ message: '已取消关键操作', type: 'info' });
}

function openDrawer(placement: 'left' | 'right'): void {
  drawerPlacement.value = placement;
  drawerVisible.value = true;
}

function onInputClear(): void {
  inputClearCount.value += 1;
}

function onSelectIcon(icon: string): void {
  pickedIcon.value = icon;
  Message({ message: `已选择图标 ${icon}`, type: 'info' });
}

function onColorChange(color: string): void {
  Message({ message: `颜色已切换为 ${color}`, type: 'info' });
}

function onFormProSubmit(): void {
  formProErrors.value = [];
  Message({ message: '表单提交成功', type: 'success' });
}

function onFormProError(errors: string[]): void {
  formProErrors.value = errors;
  Message({ message: '表单校验失败，请检查输入项', type: 'error' });
}

function onSubmitDemo(event: Event): void {
  event.preventDefault();
  formSubmitCount.value += 1;
  Message({ message: `表单提交次数：${formSubmitCount.value}`, type: 'success' });
}

async function fakeUpload({ file }: { file: File }): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  if (!file.name.endsWith('.png')) {
    throw new Error('Only .png is accepted in demo');
  }
}

async function fakeMultiUpload({ file }: { file: File }): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  if (file.size > 1024 * 1024 * 0.3) {
    throw new Error('File too large');
  }
}

function beforeUploadNameCheck(file: File): boolean {
  return file.name.toLowerCase().includes('ok');
}

function onUploadSuccess(item: { name: string }): void {
  uploadResult.value = `上传成功：${item.name}`;
}

function onUploadReject(payload: { fileName: string; reason: string }): void {
  uploadResult.value = `上传被拒绝：${payload.fileName}（${payload.reason}）`;
}

function onUploadError(): void {
  uploadResult.value = '上传失败：仅允许 png 文件';
}

function onMultiUploadSuccess(item: { name: string }): void {
  multiUploadResult.value = `批量上传成功：${item.name}`;
}

function onMultiUploadReject(payload: { fileName: string; reason: string }): void {
  multiUploadResult.value = `批量上传被拒绝：${payload.fileName}（${payload.reason}）`;
}

function onMultiUploadError(): void {
  multiUploadResult.value = '批量上传存在失败项';
}

function onTreeNodeClick(node: { label: string }): void {
  Message({ message: `选中节点：${node.label}`, type: 'info' });
}

function pushNotification(type: 'info' | 'success' | 'warning' | 'error'): void {
  const id = Date.now() + Math.floor(Math.random() * 1000);
  const titles: Record<'info' | 'success' | 'warning' | 'error', string> = {
    info: '普通通知',
    success: '成功通知',
    warning: '警告通知',
    error: '错误通知',
  };
  const next = {
    id,
    title: titles[type],
    message: `这是一条${titles[type]}，用于提示用户当前状态。`,
    type,
  };
  notifications.value = [next, ...notifications.value].slice(0, 4);
}

function removeNotification(id: number): void {
  notifications.value = notifications.value.filter((item) => item.id !== id);
}

function toggleLoading(): void {
  loadingDemo.value = !loadingDemo.value;
}

function setMenuActive(key: 'dashboard' | 'users' | 'settings'): void {
  menuActive.value = key;
}

function onConfirmDelete(): void {
  confirmVisible.value = false;
  Message({ message: '删除成功', type: 'success' });
}

function onCancelDelete(): void {
  confirmVisible.value = false;
  Message({ message: '已取消删除', type: 'info' });
}

async function onViewDoc(path: string): Promise<void> {
  const fullUrl = `${docsBaseUrl}${path}`;
  const opened = window.open(fullUrl, '_blank', 'noopener,noreferrer');
  if (opened) {
    Message({ message: `已打开文档：${fullUrl}`, type: 'success' });
    return;
  }

  try {
    await navigator.clipboard.writeText(fullUrl);
    Message({ message: `已复制文档链接：${fullUrl}`, type: 'info' });
  } catch {
    Message({ message: `文档链接：${fullUrl}`, type: 'info' });
  }
}

const implementedViews: DemoView[] = [
  'button',
  'input',
  'textarea',
  'space',
  'color',
  'icon',
  'form',
  'autocomplete',
  'dropdown',
  'date-picker',
  'form-pro',
  'badge',
  'upload',
  'message',
  'popover',
  'confirm',
  'notification',
  'loading',
  'table',
  'tree',
  'menu',
  'progress',
  'pagination',
  'tabs',
  'modal',
  'drawer',
];

function isDemoViewKey(key: string): key is DemoView {
  return implementedViews.includes(key as DemoView);
}

function onNavClick(item: NavItem): void {
  if (!item.available || !isDemoViewKey(item.key)) {
    Message({ message: `${item.label} 正在开发中`, type: 'info' });
    return;
  }
  activeView.value = item.key;
}

function badgeText(badge?: 'beta' | 'coming-soon'): string {
  if (badge === 'beta') return 'Beta';
  if (badge === 'coming-soon') return 'Soon';
  return '';
}

const filteredNavGroups = computed(() => {
  const keyword = navKeyword.value.trim().toLowerCase();
  if (!keyword) return navGroups;

  return navGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => item.label.toLowerCase().includes(keyword)),
    }))
    .filter((group) => group.items.length > 0);
});

const currentViewLabel = computed(() => {
  for (const group of navGroups) {
    const hit = group.items.find((item) => item.key === activeView.value);
    if (hit) return `${group.title} / ${hit.label}`;
  }
  return '组件';
});

const activeDocPath = computed(() => docPathMap[activeView.value]);
const activeApiDoc = computed(() => specApiDocs[activeView.value] ?? apiDocs[activeView.value]);
const activeCustomRows = computed(() => customDocs[activeView.value]);
</script>

<template>
  <div class="play-page">
    <header class="play-header">
      <div class="play-brand">
        <span class="play-brand-dot" />
        <strong>pillar-ui</strong>
      </div>
      <nav class="play-top-nav">
        <button
          v-for="item in topNavItems"
          :key="item"
          class="play-top-nav-btn"
          :class="{ 'is-active': item === '组件' }"
          type="button"
        >
          {{ item }}
        </button>
      </nav>
    </header>

    <main class="play-layout">
      <aside class="play-sidebar">
        <h2 class="play-title">组件目录</h2>
        <p class="play-subtitle">Components</p>
        <div class="play-nav-search">
          <input v-model="navKeyword" class="play-nav-search__input" placeholder="搜索组件..." />
        </div>
        <div v-for="group in filteredNavGroups" :key="group.title" class="play-nav-group">
          <h3 class="play-nav-group-title">{{ group.title }}</h3>
          <button
            v-for="item in group.items"
            :key="item.key"
            class="play-nav-btn"
            :class="{ 'is-active': activeView === item.key, 'is-disabled': !item.available }"
            type="button"
            @click="onNavClick(item)"
          >
            <span>{{ item.label }}</span>
            <em v-if="item.badge" class="play-nav-badge" :class="`is-${item.badge}`">
              {{ badgeText(item.badge) }}
            </em>
          </button>
        </div>
        <p v-if="filteredNavGroups.length === 0" class="play-nav-empty">未找到匹配组件</p>
      </aside>

      <section class="play-content">
        <header class="play-content-header">
          <h1 class="play-content-title">{{ currentViewLabel }}</h1>
          <p class="demo-desc">组件示例、状态演示与交互反馈</p>
        </header>

        <section v-if="activeView === 'button'" class="demo-card">
        <h3>按钮 Button</h3>
        <p class="demo-desc">覆盖类型、尺寸、形态、加载/禁用态、原生提交行为和消息反馈。</p>

        <h4 class="demo-subtitle">类型与语义（默认 / 主按钮 / 危险操作）</h4>
        <div class="demo-row demo-preview">
          <XxButton @click="showMessage('info', '默认按钮：普通操作')">默认按钮</XxButton>
          <XxButton type="primary" @click="showMessage('success', '主按钮：主要流程操作')">主按钮</XxButton>
          <XxButton type="danger" @click="showMessage('error', '危险按钮：删除/清空等高风险操作')">
            危险按钮
          </XxButton>
        </div>
        <DemoCodeBlock :code="demoCode.buttonType" :doc-path="activeDocPath" @view-doc="onViewDoc" />

        <h4 class="demo-subtitle">尺寸与形态（small / medium / large / plain / round / circle）</h4>
        <div class="demo-row demo-preview">
          <XxButton size="small">小号</XxButton>
          <XxButton size="medium">中号</XxButton>
          <XxButton size="large">大号</XxButton>
          <XxButton type="primary" plain>朴素按钮</XxButton>
          <XxButton round>圆角按钮</XxButton>
          <XxButton circle>
            <template #icon>+</template>
          </XxButton>
        </div>
        <DemoCodeBlock :code="demoCode.buttonShape" :doc-path="activeDocPath" @view-doc="onViewDoc" />

        <h4 class="demo-subtitle">交互状态（loading / disabled）</h4>
        <div class="demo-row demo-preview">
          <XxButton type="primary" :loading="true">加载中</XxButton>
          <XxButton :disabled="true">已禁用</XxButton>
        </div>
        <DemoCodeBlock :code="demoCode.buttonState" :doc-path="activeDocPath" @view-doc="onViewDoc" />

        <h4 class="demo-subtitle">原生行为（nativeType: submit / reset）</h4>
        <form class="demo-form-inline demo-preview" @submit="onSubmitDemo" @reset="inputValue = ''">
          <XxInput v-model="inputValue" placeholder="输入后点击提交或重置" />
          <XxButton type="primary" native-type="submit">提交</XxButton>
          <XxButton native-type="reset">重置</XxButton>
        </form>
        <p class="demo-note">表单提交次数：{{ formSubmitCount }}，当前输入值：{{ inputValue || '空' }}</p>
        <DemoCodeBlock :code="demoCode.buttonNative" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'input'" class="demo-card">
        <h3>输入框 Input</h3>
        <p class="demo-desc">覆盖基础输入、前后缀插槽、清空事件和禁用态。</p>

        <h4 class="demo-subtitle">基础 + 插槽 + clearable</h4>
        <div class="demo-row demo-preview" style="width: 520px">
          <XxInput v-model="inputValue" placeholder="请输入内容" clearable @clear="onInputClear">
            <template #prefix>🔍</template>
            <template #suffix>{{ inputValue.length }}/20</template>
          </XxInput>
        </div>
        <DemoCodeBlock :code="demoCode.inputBasic" :doc-path="activeDocPath" @view-doc="onViewDoc" />

        <h4 class="demo-subtitle">禁用状态</h4>
        <div class="demo-row demo-preview" style="width: 520px">
          <XxInput model-value="该输入框已禁用" disabled />
        </div>

        <p class="demo-note">当前输入值：{{ inputValue || '空' }}，清空次数：{{ inputClearCount }}</p>
        <DemoCodeBlock :code="demoCode.inputDisabled" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'textarea'" class="demo-card">
        <h3>文本域 Textarea</h3>
        <p class="demo-desc">用于多行输入，支持行数和字数统计等场景。</p>
        <h4 class="demo-subtitle">基础使用</h4>
        <div class="demo-preview">
          <XxTextarea v-model="textareaValue" :rows="5" placeholder="请输入详细描述..." />
        </div>
        <p class="demo-note">当前字数：{{ textareaValue.length }}</p>
        <DemoCodeBlock :code="demoCode.textareaBasic" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'space'" class="demo-card">
        <h3>间距 Space</h3>
        <p class="demo-desc">用于快速管理子元素间距，避免手动写大量 margin。</p>
        <h4 class="demo-subtitle">可调节间距</h4>
        <div class="demo-preview">
          <label class="demo-inline-control">
            间距：{{ spaceGap }}px
            <input v-model.number="spaceGap" type="range" min="4" max="32" />
          </label>
          <XxSpace class="demo-space-row" :size="spaceGap" wrap>
            <XxButton size="small">按钮 A</XxButton>
            <XxButton size="small">按钮 B</XxButton>
            <XxButton size="small">按钮 C</XxButton>
          </XxSpace>
        </div>
        <DemoCodeBlock :code="demoCode.spaceBasic" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'color'" class="demo-card">
        <h3>颜色 Color</h3>
        <p class="demo-desc">用于主题选择、状态色配置等场景。</p>
        <h4 class="demo-subtitle">颜色选择器 + 预设色板</h4>
        <div class="demo-preview">
          <XxColor v-model="selectedColor" @change="onColorChange" />
          <p class="demo-note">当前颜色：{{ selectedColor }}</p>
        </div>
        <DemoCodeBlock :code="demoCode.colorBasic" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'icon'" class="demo-card">
        <h3>图标 Icon</h3>
        <p class="demo-desc">用于操作语义表达和视觉提示。</p>
        <h4 class="demo-subtitle">图标选择与状态回显</h4>
        <div class="demo-preview">
          <div class="demo-icon-grid">
            <XxIcon
              v-for="icon in ['⭐', '🚀', '✅', '🔔', '🧩', '⚙️', '📦', '🧪']"
              :key="icon"
              class="demo-icon-btn"
              :class="{ 'is-active': pickedIcon === icon }"
              :name="icon"
              :size="18"
              @click="onSelectIcon(icon)"
            />
          </div>
          <p class="demo-note">当前选中图标：{{ pickedIcon }}</p>
        </div>
        <DemoCodeBlock :code="demoCode.iconBasic" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'form'" class="demo-card">
        <h3>表单组合（Select / Checkbox / Radio / Switch）</h3>
        <p class="demo-desc">覆盖选择态、禁用态、状态回显。</p>

        <h4 class="demo-subtitle">Select（可选 + 禁用）</h4>
        <div class="demo-row demo-preview">
          <XxSelect v-model="selectedFramework" :options="selectOptions" placeholder="请选择框架" />
          <span>当前选择：{{ selectedFramework || '未选择' }}</span>
          <XxSelect :model-value="'vue'" :options="selectOptions" disabled />
          <span>禁用示例</span>
        </div>
        <DemoCodeBlock :code="demoCode.formSelect" :doc-path="activeDocPath" @view-doc="onViewDoc" />

        <h4 class="demo-subtitle">Checkbox（布尔值）</h4>
        <div class="demo-row demo-preview">
          <XxCheckbox v-model="checked">我已阅读并同意协议</XxCheckbox>
          <XxCheckbox :model-value="true" disabled>禁用且选中</XxCheckbox>
          <span>勾选状态：{{ checked ? '已勾选' : '未勾选' }}</span>
        </div>
        <DemoCodeBlock :code="demoCode.formCheckbox" :doc-path="activeDocPath" @view-doc="onViewDoc" />

        <h4 class="demo-subtitle">Radio（互斥选择）</h4>
        <div class="demo-row demo-preview">
          <XxRadio v-model="radioValue" value="a">方案 A</XxRadio>
          <XxRadio v-model="radioValue" value="b">方案 B</XxRadio>
          <XxRadio :model-value="radioValue" value="c" disabled>方案 C（禁用）</XxRadio>
          <span>当前方案：{{ radioValue }}</span>
        </div>
        <DemoCodeBlock :code="demoCode.formRadio" :doc-path="activeDocPath" @view-doc="onViewDoc" />

        <h4 class="demo-subtitle">Switch（开关 + 禁用）</h4>
        <div class="demo-row demo-preview">
          <XxSwitch v-model="enabled" />
          <XxSwitch :model-value="true" disabled />
          <span>开关状态：{{ enabled ? '开启' : '关闭' }}</span>
        </div>
        <DemoCodeBlock :code="demoCode.formSwitch" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'autocomplete'" class="demo-card">
        <h3>自动完成 AutoComplete</h3>
        <p class="demo-desc">覆盖高亮匹配、非高亮模式、空状态插槽和键盘交互（↑↓ Enter Esc）。</p>

        <h4 class="demo-subtitle">高亮匹配（highlight = true）</h4>
        <div class="demo-row demo-preview">
          <XxAutoComplete v-model="keyword" :options="options" placeholder="请输入关键词">
            <template #empty>
              <span style="color: #f56c6c">没有匹配结果</span>
            </template>
          </XxAutoComplete>
          <span>当前值：{{ keyword }}</span>
        </div>
        <DemoCodeBlock :code="demoCode.autoHighlight" :doc-path="activeDocPath" @view-doc="onViewDoc" />

        <h4 class="demo-subtitle">普通匹配（highlight = false）</h4>
        <div class="demo-row demo-preview">
          <XxAutoComplete
            v-model="keywordPlain"
            :options="options"
            :highlight="false"
            placeholder="不高亮匹配模式"
          />
          <span>当前值：{{ keywordPlain }}</span>
        </div>
        <DemoCodeBlock :code="demoCode.autoPlain" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'dropdown'" class="demo-card">
        <h3>下拉菜单 Dropdown</h3>
        <p class="demo-desc">用于承载一组关联操作，减少页面按钮密度。</p>
        <h4 class="demo-subtitle">基础下拉操作</h4>
        <div class="demo-preview">
          <XxDropdown v-model="dropdownValue" :options="dropdownOptions" placeholder="请选择操作" />
          <p class="demo-note">当前操作：{{ dropdownValue || '未选择' }}</p>
        </div>
        <DemoCodeBlock :code="demoCode.dropdownBasic" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'date-picker'" class="demo-card">
        <h3>日期选择 Date Picker</h3>
        <p class="demo-desc">用于筛选、排期、日志查询等日期输入场景。</p>
        <h4 class="demo-subtitle">日期与时间选择</h4>
        <div class="demo-preview">
          <div class="demo-date-row">
            <label>日期：</label>
            <XxDatePicker v-model="dateValue" type="date" />
            <span>{{ dateValue || '未选择' }}</span>
          </div>
          <div class="demo-date-row">
            <label>日期时间：</label>
            <XxDatePicker v-model="dateTimeValue" type="datetime-local" />
            <span>{{ dateTimeValue || '未选择' }}</span>
          </div>
        </div>
        <DemoCodeBlock :code="demoCode.dateBasic" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'form-pro'" class="demo-card">
        <h3>高级表单 Form Pro</h3>
        <p class="demo-desc">示例一个带前端校验的表单提交流程。</p>
        <h4 class="demo-subtitle">基础校验 + 提交流程</h4>
        <div class="demo-preview">
          <XxFormPro :model="formPro" :rules="formProRules" @submit="onFormProSubmit" @validate-error="onFormProError">
            <div class="demo-form-pro">
              <label>
                姓名
                <XxInput v-model="formPro.name" placeholder="请输入姓名" />
              </label>
              <label>
                邮箱
                <XxInput v-model="formPro.email" placeholder="请输入邮箱" />
              </label>
              <label>
                角色
                <XxSelect v-model="formPro.role" :options="selectOptions" placeholder="请选择角色" />
              </label>
            </div>
          </XxFormPro>
            <ul v-if="formProErrors.length" class="demo-error-list">
              <li v-for="err in formProErrors" :key="err">{{ err }}</li>
            </ul>
        </div>
        <DemoCodeBlock :code="demoCode.formPro" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'modal'" class="demo-card">
        <h3>弹窗 Modal</h3>
        <p class="demo-desc">覆盖普通确认弹窗、关键操作弹窗（禁止点遮罩关闭）。</p>

        <div class="demo-row demo-preview">
          <XxButton type="primary" @click="modalVisible = true">普通弹窗</XxButton>
          <XxButton type="danger" @click="strictModalVisible = true">关键操作弹窗</XxButton>
        </div>

        <XxModal v-model="modalVisible" title="操作确认" @confirm="onModalConfirm">
          普通场景：点击遮罩可关闭。
        </XxModal>
        <DemoCodeBlock :code="demoCode.modalBasic" :doc-path="activeDocPath" @view-doc="onViewDoc" />

        <XxModal
          v-model="strictModalVisible"
          title="高风险确认"
          width="600px"
          :close-on-mask="false"
          @confirm="onStrictModalConfirm"
          @cancel="onStrictModalCancel"
        >
          高风险场景：禁止点击遮罩关闭，请明确选择“取消”或“确认”。
        </XxModal>
        <DemoCodeBlock :code="demoCode.modalStrict" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'message'" class="demo-card">
        <h3>消息提示 Message</h3>
        <p class="demo-desc">用于轻量反馈，支持信息/成功/错误三类提示。</p>
        <h4 class="demo-subtitle">消息类型演示</h4>
        <div class="demo-row demo-preview">
          <XxButton @click="showMessage('info', '这是一条普通消息')">信息</XxButton>
          <XxButton type="primary" @click="showMessage('success', '保存成功')">成功</XxButton>
          <XxButton type="danger" @click="showMessage('error', '操作失败，请重试')">错误</XxButton>
        </div>
        <DemoCodeBlock :code="demoCode.messageBasic" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'popover'" class="demo-card">
        <h3>气泡提示 Popover</h3>
        <p class="demo-desc">用于展示简短说明，不打断主流程。</p>
        <h4 class="demo-subtitle">悬停展示</h4>
        <div class="demo-preview">
          <XxPopover content="这里是 Popover 内容，可放置简短操作说明。">
            <XxButton>鼠标悬停查看</XxButton>
          </XxPopover>
        </div>
        <DemoCodeBlock :code="demoCode.popoverBasic" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'confirm'" class="demo-card">
        <h3>二次确认 Confirm</h3>
        <p class="demo-desc">用于高风险操作前确认，避免误操作。</p>
        <h4 class="demo-subtitle">删除确认</h4>
        <div class="demo-row demo-preview">
          <XxButton type="danger" @click="confirmVisible = true">删除数据</XxButton>
        </div>
        <XxConfirm
          v-model="confirmVisible"
          title="二次确认"
          content="删除后不可恢复，请确认是否继续？"
          confirm-type="danger"
          @confirm="onConfirmDelete"
          @cancel="onCancelDelete"
        />
        <DemoCodeBlock :code="demoCode.confirmBasic" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'notification'" class="demo-card">
        <h3>通知 Notification</h3>
        <p class="demo-desc">用于系统级消息提醒，可同时存在多条。</p>
        <h4 class="demo-subtitle">通知中心示例</h4>
        <div class="demo-preview">
          <div class="demo-row">
            <XxButton type="primary" @click="pushNotification('success')">成功通知</XxButton>
            <XxButton @click="pushNotification('info')">普通通知</XxButton>
            <XxButton type="danger" @click="pushNotification('error')">错误通知</XxButton>
          </div>
          <XxNotification :list="notifications" @close="removeNotification" />
        </div>
        <DemoCodeBlock :code="demoCode.notificationBasic" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'loading'" class="demo-card">
        <h3>加载 Loading</h3>
        <p class="demo-desc">用于异步任务执行期间的状态反馈。</p>
        <h4 class="demo-subtitle">局部加载遮罩</h4>
        <XxLoading class="demo-preview demo-loading-preview" :loading="loadingDemo" text="加载中，请稍候...">
          <XxButton type="primary" @click="toggleLoading">{{ loadingDemo ? '关闭加载' : '显示加载' }}</XxButton>
          <p class="demo-note">模拟接口调用中的局部 loading 状态。</p>
        </XxLoading>
        <DemoCodeBlock :code="demoCode.loadingBasic" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'badge'" class="demo-card">
        <h3>徽章 Badge</h3>
        <p class="demo-desc">用于展示角标、状态数量和提醒信息。</p>
        <h4 class="demo-subtitle">数字徽章与点状徽章</h4>
        <div class="demo-preview">
          <div class="demo-row">
            <XxBadge :value="12"><XxButton>待处理</XxButton></XxBadge>
            <XxBadge :value="3" type="warning"><XxButton>告警</XxButton></XxBadge>
            <XxBadge :value="28" type="success"><XxButton>完成</XxButton></XxBadge>
            <XxBadge dot type="danger"><XxButton plain>新消息</XxButton></XxBadge>
          </div>
        </div>
        <DemoCodeBlock :code="demoCode.badgeBasic" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <TableSection
          v-if="activeView === 'table'"
          :doc-path="activeDocPath"
          :columns="columns"
          :table-data="tableData"
          :demo-code="{
            tableStriped: demoCode.tableStriped,
            tableBorderless: demoCode.tableBorderless,
            tableEmpty: demoCode.tableEmpty,
          }"
          @view-doc="onViewDoc"
        />

        <section v-if="activeView === 'tree'" class="demo-card">
        <h3>树形控件 Tree</h3>
        <p class="demo-desc">用于展示层级结构数据，支持节点展开/收起。</p>
        <h4 class="demo-subtitle">可展开节点</h4>
        <div class="demo-preview">
          <XxTree :data="treeData" default-expand-all @node-click="onTreeNodeClick" />
        </div>
        <DemoCodeBlock :code="demoCode.treeBasic" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <MenuSection
          v-if="activeView === 'menu'"
          :doc-path="activeDocPath"
          :menu-items="menuItems"
          :menu-active="menuActive"
          :menu-dark-active="menuDarkActive"
          :menu-brand-active="menuBrandActive"
          :menu-vertical-active="menuVerticalActive"
          :demo-code="{
            menuBasic: demoCode.menuBasic,
            menuDark: demoCode.menuDark,
            menuBrand: demoCode.menuBrand,
            menuVertical: demoCode.menuVertical,
          }"
          @update:menu-active="setMenuActive"
          @update:menu-dark-active="menuDarkActive = $event"
          @update:menu-brand-active="menuBrandActive = $event"
          @update:menu-vertical-active="menuVerticalActive = $event"
          @view-doc="onViewDoc"
        />

        <section v-if="activeView === 'progress'" class="demo-card">
        <h3>进度条 Progress</h3>
        <p class="demo-desc">用于可视化任务完成度。</p>
        <h4 class="demo-subtitle">可调节进度</h4>
        <div class="demo-preview">
          <label class="demo-inline-control">
            当前进度：{{ progressValue }}%
            <input v-model.number="progressValue" type="range" min="0" max="100" />
          </label>
          <XxProgress :percentage="progressValue" status="success" />
        </div>
        <DemoCodeBlock :code="demoCode.progressBasic" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'tabs'" class="demo-card">
        <h3>标签页 Tabs</h3>
        <p class="demo-desc">覆盖激活态切换与禁用项。</p>
        <div class="demo-preview">
          <XxTabs
            v-model="currentTab"
            :items="[
              { label: '基础设置', value: 'basic' },
              { label: '高级设置', value: 'advanced' },
              { label: '禁用项', value: 'disabled', disabled: true },
            ]"
          />
        </div>
        <p>当前标签：{{ currentTab === 'basic' ? '基础设置' : '高级设置' }}</p>
        <DemoCodeBlock :code="demoCode.tabs" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <PaginationSection
          v-if="activeView === 'pagination'"
          :doc-path="activeDocPath"
          :page="page"
          :small-page="smallPage"
          :demo-code="{
            pageBasic: demoCode.pageBasic,
            pageSmall: demoCode.pageSmall,
          }"
          @update:page="page = $event"
          @update:small-page="smallPage = $event"
          @view-doc="onViewDoc"
        />

        <section v-if="activeView === 'drawer'" class="demo-card">
        <h3>抽屉 Drawer</h3>
        <p class="demo-desc">覆盖左右方向、常规可遮罩关闭、严格模式不可遮罩关闭。</p>
        <div class="demo-row demo-preview">
          <XxButton type="primary" @click="openDrawer('right')">从右侧打开</XxButton>
          <XxButton @click="openDrawer('left')">从左侧打开</XxButton>
          <XxButton type="danger" @click="strictDrawerVisible = true">严格模式抽屉</XxButton>
        </div>
        <XxDrawer v-model="drawerVisible" title="用户详情" :placement="drawerPlacement" size="420px">
          这里是抽屉内容区域，当前方向：{{ drawerPlacement === 'right' ? '右侧' : '左侧' }}。
        </XxDrawer>
        <DemoCodeBlock :code="demoCode.drawerNormal" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        <XxDrawer v-model="strictDrawerVisible" title="严格模式抽屉" :close-on-mask="false">
          当前抽屉禁止点击遮罩关闭，只能点右上角关闭按钮。
        </XxDrawer>
        <DemoCodeBlock :code="demoCode.drawerStrict" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section v-if="activeView === 'upload'" class="demo-card">
        <h3>上传 Upload</h3>
        <p class="demo-desc">覆盖类型校验、体积限制、beforeUpload 拦截、单文件和多文件场景。</p>

        <h4 class="demo-subtitle">单文件上传（仅 png，最大 0.1MB）</h4>
        <div class="demo-preview">
          <XxUpload
            accept=".png,image/png"
            :max-size="0.1"
            :request="fakeUpload"
            @success="onUploadSuccess"
            @reject="onUploadReject"
            @error="onUploadError"
          />
        </div>
        <p class="demo-note">{{ uploadResult }}</p>
        <DemoCodeBlock :code="demoCode.uploadSingle" :doc-path="activeDocPath" @view-doc="onViewDoc" />

        <h4 class="demo-subtitle">多文件上传（文件名需包含 ok，最大 0.3MB）</h4>
        <div class="demo-preview">
          <XxUpload
            accept=".png,image/png"
            multiple
            :max-size="0.3"
            :before-upload="beforeUploadNameCheck"
            :request="fakeMultiUpload"
            @success="onMultiUploadSuccess"
            @reject="onMultiUploadReject"
            @error="onMultiUploadError"
          >
            <span>选择多个文件（示例规则：文件名包含 ok）</span>
          </XxUpload>
        </div>
        <p class="demo-note">{{ multiUploadResult }}</p>
        <DemoCodeBlock :code="demoCode.uploadMulti" :doc-path="activeDocPath" @view-doc="onViewDoc" />
        </section>

        <section class="demo-card">
          <h3>自定义</h3>
          <p class="demo-desc">按 theme、颜色、插槽三个维度提供可视化自定义示例。</p>
          <template v-for="variant in customVariants" :key="variant.key">
          <h4 class="demo-subtitle">{{ variant.title }}</h4>
          <p class="demo-desc">{{ variant.desc }}</p>
          <div class="demo-preview demo-custom-preview" :class="[`custom-${activeView}`, `custom-${variant.key}-${activeView}`]">
            <template v-if="activeView === 'button'">
              <XxButton type="primary">主按钮</XxButton>
              <XxButton round style="margin-left: 8px">圆角按钮</XxButton>
            </template>
            <template v-else-if="activeView === 'input'">
              <XxInput v-model="inputValue" placeholder="自定义输入框" />
            </template>
            <template v-else-if="activeView === 'textarea'">
              <XxTextarea v-model="textareaValue" :rows="4" placeholder="自定义文本域" />
            </template>
            <template v-else-if="activeView === 'space'">
              <XxSpace :size="spaceGap">
                <XxButton size="small">按钮 A</XxButton>
                <XxButton size="small">按钮 B</XxButton>
              </XxSpace>
            </template>
            <template v-else-if="activeView === 'color'">
              <XxColor v-model="selectedColor" />
            </template>
            <template v-else-if="activeView === 'icon'">
              <div class="demo-row">
                <XxIcon name="⭐" :size="20" />
                <XxIcon name="🚀" :size="20" />
              </div>
            </template>
            <template v-else-if="activeView === 'form'">
              <XxSelect v-model="selectedFramework" :options="selectOptions" placeholder="统一表单风格" />
            </template>
            <template v-else-if="activeView === 'autocomplete'">
              <XxAutoComplete v-model="keyword" :options="options" placeholder="自定义搜索框" />
            </template>
            <template v-else-if="activeView === 'dropdown'">
              <XxDropdown v-model="dropdownValue" :options="dropdownOptions" />
            </template>
            <template v-else-if="activeView === 'date-picker'">
              <XxDatePicker v-model="dateValue" type="date" />
            </template>
            <template v-else-if="activeView === 'form-pro'">
              <XxFormPro :model="formPro" :rules="formProRules">
                <XxInput v-model="formPro.name" placeholder="姓名" />
              </XxFormPro>
            </template>
            <template v-else-if="activeView === 'badge'">
              <XxBadge :value="12"><XxButton>待处理</XxButton></XxBadge>
            </template>
            <template v-else-if="activeView === 'modal'">
              <XxButton type="primary" @click="modalVisible = true">打开弹窗</XxButton>
            </template>
            <template v-else-if="activeView === 'message'">
              <XxButton @click="showMessage('success', '自定义成功消息')">触发消息</XxButton>
            </template>
            <template v-else-if="activeView === 'popover'">
              <XxPopover content="自定义气泡内容">
                <XxButton>悬停查看</XxButton>
              </XxPopover>
            </template>
            <template v-else-if="activeView === 'confirm'">
              <XxButton type="danger" @click="confirmVisible = true">触发确认</XxButton>
            </template>
            <template v-else-if="activeView === 'notification'">
              <XxButton @click="pushNotification('success')">添加通知</XxButton>
            </template>
            <template v-else-if="activeView === 'loading'">
              <XxLoading :loading="loadingDemo">
                <XxButton @click="toggleLoading">切换</XxButton>
              </XxLoading>
            </template>
            <template v-else-if="activeView === 'table'">
              <XxTable :columns="columns" :data="tableData" striped />
            </template>
            <template v-else-if="activeView === 'tree'">
              <XxTree :data="treeData" default-expand-all />
            </template>
            <template v-else-if="activeView === 'menu'">
              <XxMenu :active="menuBrandActive" :items="menuItems" @update:active="menuBrandActive = $event" />
            </template>
            <template v-else-if="activeView === 'progress'">
              <XxProgress :percentage="progressValue" status="success" />
            </template>
            <template v-else-if="activeView === 'tabs'">
              <XxTabs
                v-model="currentTab"
                :items="[
                  { label: '基础设置', value: 'basic' },
                  { label: '高级设置', value: 'advanced' },
                ]"
              />
            </template>
            <template v-else-if="activeView === 'pagination'">
              <XxPagination v-model="page" :total="96" :page-size="10" />
            </template>
            <template v-else-if="activeView === 'drawer'">
              <XxButton type="primary" @click="openDrawer('right')">打开抽屉</XxButton>
            </template>
            <template v-else-if="activeView === 'upload'">
              <XxUpload accept=".png,image/png" :max-size="0.1" :request="fakeUpload" />
            </template>
          </div>
          <DemoCodeBlock :code="getCustomCode(activeView, variant.key)" :doc-path="activeDocPath" @view-doc="onViewDoc" />
          </template>
        </section>

        <section class="demo-api-card">
          <h3 class="demo-api-title">Attributes 参数</h3>
          <table class="demo-api-table">
            <thead>
              <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in activeApiDoc.attributes" :key="`attr-${item.name}`">
                <td><code>{{ item.name }}</code></td>
                <td>{{ item.description }}</td>
                <td><code>{{ item.type }}</code></td>
                <td><code>{{ item.default }}</code></td>
              </tr>
            </tbody>
          </table>

          <h3 class="demo-api-title">Events 事件</h3>
          <table class="demo-api-table">
            <thead>
              <tr>
                <th>事件名</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody v-if="activeApiDoc.events.length">
              <tr v-for="item in activeApiDoc.events" :key="`event-${item.name}`">
                <td><code>{{ item.name }}</code></td>
                <td>{{ item.description }}</td>
                <td><code>{{ item.type }}</code></td>
                <td><code>{{ item.default }}</code></td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="4" class="demo-api-empty">暂无事件</td>
              </tr>
            </tbody>
          </table>

          <h3 class="demo-api-title">Slots 插槽</h3>
          <table class="demo-api-table">
            <thead>
              <tr>
                <th>插槽名</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody v-if="activeApiDoc.slots.length">
              <tr v-for="item in activeApiDoc.slots" :key="`slot-${item.name}`">
                <td><code>{{ item.name }}</code></td>
                <td>{{ item.description }}</td>
                <td><code>{{ item.type }}</code></td>
                <td><code>{{ item.default }}</code></td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="4" class="demo-api-empty">暂无插槽</td>
              </tr>
            </tbody>
          </table>

          <h3 class="demo-api-title">自定义</h3>
          <table class="demo-api-table">
            <thead>
              <tr>
                <th>目标</th>
                <th>说明</th>
                <th>示例</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in activeCustomRows" :key="`custom-${item.selector}`">
                <td><code>{{ item.selector }}</code></td>
                <td>{{ item.description }}</td>
                <td><code>{{ item.sample }}</code></td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </main>
  </div>
</template>
