<template>
    <ToServeItem
        v-for="(table,index) in tables"
        :id="index"
        :status="table.status"
        :table_id="table.table_id"
        :orders="table.orders"
        :key="index"
    >
    </ToServeItem>
</template>

<script>
import ToServeItem from './ToServeItem.vue';

export default {
  data() {
    return {
      tables: [
        {
          table_id: 1,
          status: 'ยังไม่เสิร์ฟ',
          orders: [
            {
              order: 'ข้าวไข่เจียว',
              quantity: 2,
            },
            {
              order: 'กะเพราหมูไข่ดาว',
              quantity: 1,
            },
            {
              order: 'กะเพราหมูดาว',
              quantity: 1,
            },
          ],
        },
        {
          table_id: 2,
          status: 'ยังไม่เสิร์ฟ',
          orders: [
            {
              order: 'ไข่ดาว',
              quantity: 1,
            },
            {
              order: 'กะเพราดาว',
              quantity: 1,
            },
            {
              order: 'กะเพราหมูไข่',
              quantity: 1,
            },
          ],
        },
      ],
    };
  },
  components: {ToServeItem},
};
</script>
