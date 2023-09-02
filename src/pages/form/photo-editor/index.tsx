import { Card, message } from 'antd';
import ProForm, {
  ProFormDateRangePicker,
  ProFormDependency,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { useRequest } from 'umi';
import type { FC } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { fakeSubmitForm } from './service';
import styles from './style.less';
import photoSizes from './photo-sizes.json';
import paperSizes from './paper-sizes.json';
import Uploader from './uploader';

const fieldLabels = {
  photoSize: '证件照尺寸',
  paperSize: '选择用多大的照片冲洗（一般选择6寸的就好，这个价格最合适）',
  name: '仓库名',
  url: '仓库域名',
  owner: '仓库管理员',
  approver: '审批人',
  dateRange: '生效日期',
  type: '仓库类型',
  name2: '任务名',
  url2: '任务描述',
  owner2: '执行人',
  approver2: '责任人',
  dateRange2: '生效日期',
  type2: '任务类型',
};

const PhotoEditorBasicForm: FC<Record<string, any>> = () => {
  const { run } = useRequest(fakeSubmitForm, {
    manual: true,
    onSuccess: () => {
      message.success('提交成功');
    },
  });

  const onFinish = async (values: Record<string, any>) => {
    run(values);
  };

  return (
    <PageContainer content="证件照片排版在线生成器。">
      <ProForm
        hideRequiredMark
        style={{ margin: 'auto', marginTop: 8, maxWidth: 600 }}
        name="basic"
        layout="vertical"
        initialValues={{ public: '1' }}
        onFinish={onFinish}
      >
        <Card title={'第一步'} className={styles.card} bordered={false}>
          <ProFormSelect
            label={fieldLabels.photoSize}
            name="photoSize"
            rules={[{ required: true, message: '请选择你要冲洗的证件照片的尺寸' }]}
            options={photoSizes}
            placeholder="请选择你要冲洗的证件照片的尺寸"
          />
        </Card>

        <Card title={'第二步'} className={styles.card} bordered={false}>
          <ProFormSelect
            label={fieldLabels.paperSize}
            name="paperSize"
            rules={[{ required: true, message: '照片纸尺寸' }]}
            options={paperSizes}
            placeholder="选择用多大的照片冲洗（一般选择6寸的就好，这个价格最合适）"
          />
        </Card>

        <Card title={'第三步'} className={styles.card} bordered={false}>
          <ProFormRadio.Group
            options={[
              {
                value: '1',
                label: '蓝色',
              },
              {
                value: '2',
                label: '白色',
              },
              {
                value: '3',
                label: '灰色',
              },
            ]}
            label="背景色"
            help="相片纸的背景色"
            name="background"
          />
        </Card>

        <Card title={'第四步'} className={styles.card} bordered={false}>
          <Uploader></Uploader>
        </Card>
      </ProForm>
    </PageContainer>
  );
};

export default PhotoEditorBasicForm;
