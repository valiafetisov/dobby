import MyAccountArchival from './AccountArchival.vue'
import { NCollapse } from 'naive-ui'
import { action } from '@storybook/addon-actions'

export default {
  title: '/MyAccountArchival',
  component: MyAccountArchival,
  argTypes: {
    generated: { action: 'generated' },
    updateConfirmed: { action: 'updateConfirmed' },
  },
}

export const Default = {
  args: {
    accountPrivateKey: 'E9873D79C6D87DC0FB6A5778633389F4453213303DA61F20BD67FC233AA33262',
  },
  render: (args: any) => ({
    components: { MyAccountArchival, NCollapse },
    methods: { generated: action('generated'), updateConfirmed: action('updateConfirmed') },
    setup: () => ({
      ...args,
    }),
    template: `<n-collapse display-directive="show"><MyAccountArchival :accountPrivateKey="accountPrivateKey" @generated="generated" @updateConfirmed="updateConfirmed" /></n-collapse>`,
  }),
}