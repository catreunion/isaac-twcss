<template>
  <div class="flex flex-col overflow-y-auto border-r border-gray-200 bg-white pb-4">
    <div class="mt-5 flex flex-grow flex-col">
      <nav class="flex-1 space-y-1 bg-white" aria-label="Sidebar">
        <RouterLink
          v-for="item in items"
          :to="item.href"
          :key="item.name"
          :class="
            ('border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'border-l-1 group flex items-center px-3 py-2 text-sm font-medium')
          "
        >
          {{ item.name }}
        </RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
const items = [
  { name: 'Flex Basis', href: '/flexgrid/flexbasis' },
  { name: 'Flex Direction', href: '/flexgrid/flexdirection' },
  { name: 'Flex Wrap', href: '/flexgrid/flexwrap' },
  { name: 'Flex 😼', href: '/flexgrid/flex' },
  { name: 'Flex Grow', href: '/flexgrid/flexbrow' },
  { name: 'Flex Shrink', href: '/flexgrid/flexshrink' },
  { name: 'Order', href: '/flexgrid/order' },
  { name: 'Grid Template Columns', href: '/flexgrid/gtempcol' },
  { name: 'Grid Column Start End', href: '/flexgrid/gridcolumnstartend' },
  { name: 'Grid Template Rows', href: '/flexgrid/gridtemplaterows' },
  { name: 'Grid Row Start / End', href: '/flexgrid/gridrowstartend' },
  { name: 'Grid Auto Flow', href: '/flexgrid/gridautoflow' },
  { name: 'Grid Auto Columns', href: '/flexgrid/gridautocolumns' },
  { name: 'Grid Auto Rows', href: '/flexgrid/gridautorows' },
  { name: 'Gap', href: '/flexgrid/gap' },
  { name: 'Justify Content 🆗', href: '/flexgrid/jcontent' },
  { name: 'Align Content 😼', href: '/flexgrid/acontent' },
  { name: 'Justify Items', href: '/flexgrid/justifyitems' },
  { name: 'Justify Self', href: '/flexgrid/justifyself' },
  { name: 'Align Items 😼', href: '/flexgrid/alignitems' },
  { name: 'Align Self', href: '/flexgrid/alignself' },
  { name: 'Place Content', href: '/flexgrid/placecontent' },
  { name: 'Place Items', href: '/flexgrid/placeitems' },
  { name: 'Place Self', href: '/flexgrid/placeself' },
]
</script>
