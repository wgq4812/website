import test from 'ava'
import { mount } from '@vue/test-utils'
import Modal from '@/components/Modal.vue'

test('is a Vue instance', (t) => {
  const wrapper = mount(Modal, {
    propsData: {
      title: 'Testing Modal',
    },
  })
  t.truthy(wrapper.vm)
})
