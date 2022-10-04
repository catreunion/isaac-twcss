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
  { name: 'Font Family', href: '/typography/fontfamily' },
  { name: 'Font Size 😼', href: '/typography/fsize' },
  { name: 'Font Smoothing', href: '/typography/fontsmoothing' },
  { name: 'Font Style', href: '/typography/fontstyle' },
  { name: 'Font Weight 😼', href: '/typography/fweight' },
  { name: 'Font Variant Numeric', href: '/typography/fontvariantnumeric' },
  { name: 'Letter Spacing', href: '/typography/letterspacing' },
  { name: 'Line Height', href: '/typography/lineheight' },
  { name: 'List Style Type', href: '/typography/liststyletype' },
  { name: 'List Style Position', href: '/typography/liststyleposition' },
  { name: 'Text Align', href: '/typography/textalign' },
  { name: 'Text Color 😼', href: '/typography/tcolor' },
  { name: 'Text Decoration', href: '/typography/textdecoration' },
  { name: 'Text Decoration Color', href: '/typography/textdecorationcolor' },
  { name: 'Text Decoration Style', href: '/typography/textunderlineoffset' },
  { name: 'Text Decoration Thickness', href: '/typography/textdecorationthickness' },
  { name: 'Text Underline Offset', href: '/typography/liststyleposition' },
  { name: 'Text Transform 😼', href: '/typography/ttransform' },
  { name: 'Text Overflow', href: '/typography/textoverflow' },
  { name: 'Text Indent', href: '/typography/textindent' },
  { name: 'Vertical Align', href: '/typography/verticalalign' },
  { name: 'Whitespace', href: '/typography/whitespace' },
  { name: 'Word Break', href: '/typography/wordbreak' },
  { name: 'Content', href: '/typography/content' },
]
</script>
