<template>
  <Form form="{form}" labelCol="{6}" wrapperCol="{10}">
    <SchemaField
      :schema="{
        type: 'object',
        properties: {
          input: {
            'title': '最大值(>5报错)',
            'type': 'string',
            'x-component': 'Input',
          },
        },
      }"
    >
    </SchemaField>
  </Form>
</template>

<script>
import { Input, Form } from 'ant-design-vue';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/vue';
import 'ant-design-vue/dist/antd.css';

const { SchemaField } = createSchemaField({
  components: {
    Input,
  },
});

export default {
  components: { FormProvider, SchemaField },
  data() {
    return {
      form: createForm(),
    };
  },
};
</script>
