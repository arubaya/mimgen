import * as recoil from 'recoil';

export const openTemplateDialog = recoil.atom({
  key: 'openTemplateDialog',
  default: { open: false, id: null, name: '', url: '', box_count: 0 }
});

export const updateData = recoil.atom({
  key: 'updateData',
  default: false,
})

export const imageResultUrl = recoil.atom({
  key: 'imageResultUrl',
  default: '',
})