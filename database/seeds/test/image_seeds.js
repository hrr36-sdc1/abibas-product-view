exports.seed = (knex, Promise) => knex('images').del()
  .then(() => knex('images').insert({
    links: [
      'https://s3.amazonaws.com/fec-abibas/f6937e328b7c44ef886ea97501027a8f_9366.jpg',
      'https://s3.amazonaws.com/fec-abibas/e50a6e3482a24d789c32a7af00eb1e98_9366.jpg',
      'https://s3.amazonaws.com/fec-abibas/da5dee235bc64897aa4ba976010e3dfc_9366.jpg',
      'https://s3.amazonaws.com/fec-abibas/Ultraboost_All_Terrain_Shoes_White_B37699_03_standard.jpg',
      'https://s3.amazonaws.com/fec-abibas/4536212689c849fca916a976010e1aa8_9366.jpg',
      'https://s3.amazonaws.com/fec-abibas/362670b24a8f4f0ab4caa976010e60b7_9366.jpg',
      'https://s3.amazonaws.com/fec-abibas/1264df3066694fe981a0a976010e5511_9366.jpg',
    ].join('***'),
  }))
  .then(() => knex('images').insert({
    links: [
      'https://s3.amazonaws.com/fec-abibas/Ultraboost_All_Terrain_Shoes_Grey_F35236_04_standard.jpg',
      'https://s3.amazonaws.com/fec-abibas/9c01dbf404564288a4b4a7af00f3d09f_9366.jpg',
      'https://s3.amazonaws.com/fec-abibas/9bd9d0ae47aa4e6c85b8a97e012f405b_9366.jpg',
      'https://s3.amazonaws.com/fec-abibas/83a6753663a74bb49a85a7af00f3ae43_9366.jpg',
      'https://s3.amazonaws.com/fec-abibas/4d869696686549319caaa97e012f6383_9366.jpg',
    ].join('***'),
  }))
  .then(() => knex('images').insert({
    links: [
      'https://s3.amazonaws.com/fec-abibas/c7b58d47075441b48d8ba97e012f7bdb_9366.jpg',
      'https://s3.amazonaws.com/fec-abibas/bc1681a65a70433fb920a7af00eaf437_9366.jpg',
      'https://s3.amazonaws.com/fec-abibas/30580fc5f5a74a1eaa52a97c0124f77d_9366.jpg',
      'https://s3.amazonaws.com/fec-abibas/07a07dbbb4ef4ef3bd44a7af00f3be4c_9366.jpg',
      'https://s3.amazonaws.com/fec-abibas/061ba858e69744459f8ba7af00f3de80_9366.jpg',
    ].join('***'),
  }));
