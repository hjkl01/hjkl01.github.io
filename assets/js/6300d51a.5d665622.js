"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[1953],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),f=i,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||l;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},99325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(83117),i=(t(67294),t(3905));const l={sidebar_position:4},a="neovim vimscript (old)",o={unversionedId:"neovim",id:"neovim",title:"neovim vimscript (old)",description:"\u6211\u7684neovim\u914d\u7f6e",source:"@site/notes/linux/neovim.md",sourceDirName:".",slug:"/neovim",permalink:"/notes/linux/neovim",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"asdf",permalink:"/notes/linux/asdf"},next:{title:"neovim lua",permalink:"/notes/linux/neovim_lua"}},s={},u=[{value:"\u6211\u7684neovim\u914d\u7f6e",id:"\u6211\u7684neovim\u914d\u7f6e",level:2},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:2}],p={toc:u};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"neovim-vimscript-old"},"neovim vimscript (old)"),(0,i.kt)("h2",{id:"\u6211\u7684neovim\u914d\u7f6e"},"\u6211\u7684neovim\u914d\u7f6e"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/hjkl01/init.vim"},"https://github.com/hjkl01/init.vim"))),(0,i.kt)("h2",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# status/tabline vim-airline/vim-airline\nPlug 'vim-airline/vim-airline'\nPlug 'vim-airline/vim-airline-themes'\nlet g:airline#extensions#tabline#formatter = 'default'\nlet g:airline#extensions#tabline#enabled = 1\n\" let g:airline#extensions#tabline#left_sep = ' '\n\" let g:airline#extensions#tabline#left_alt_sep = '|'\n\" let g:airline#extensions#tabline#enabled = 1\n\" let g:airline#extensions#tabline#tab_nr_type = 1 \" tab number\n\" let g:airline#extensions#tabline#show_tab_nr = 1\n\" let g:airline#extensions#tabline#formatter = 'default'\n\" let g:airline#extensions#tabline#buffer_nr_show = 0\n\" let g:airline#extensions#tabline#fnametruncate = 16\n\" let g:airline#extensions#tabline#fnamecollapse = 2\n\" let g:airline#extensions#tabline#buffer_idx_mode = 1\nlet g:airline_theme='molokai'\n\n# format file\nPlug 'Chiel92/vim-autoformat'\n\n\" autocmd BufWrite * :Autoformat\nlet g:autoformat_autoindent = 1\nlet g:autoformat_retab = 1\nlet g:autoformat_remove_trailing_spaces = 1\n\n\n# \u6587\u4ef6\u76ee\u5f55 \nPlug 'preservim/nerdtree'\nlet g:NERDTreeWinPos = \"right\"\nlet NERDTreeShowHidden=1\nlet NERDTreeShowLineNumbers=1\nlet NERDTreeIgnore = ['\\.pyc$', '__pycache__']\nlet g:NERDTreeWinSize=35\nlet g:NERDTreeDirArrows = 1\n\"\u5f53\u6253\u5f00vim\u4e14\u6ca1\u6709\u6587\u4ef6\u65f6\u81ea\u52a8\u6253\u5f00NERDTree\n\" autocmd vimenter * if !argc() | NERDTree | endif\n\"\" \u53ea\u5269 NERDTree\u65f6\u81ea\u52a8\u5173\u95ed\nautocmd bufenter * if (winnr(\"$\") == 1 && exists(\"b:NERDTree\") && b:NERDTree.isTabTree()) | q | endif\n\nnmap <Space>n :NERDTreeToggle<CR>\nnmap <Space>n <ESC> :NERDTreeToggle<CR>\n\n# nvim-tree.lua\nPlug 'kyazdani42/nvim-web-devicons' \" for file icons\nPlug 'kyazdani42/nvim-tree.lua'\nautocmd BufEnter * ++nested if winnr('$') == 1 && bufname() == 'NvimTree_' . tabpagenr() | quit | endif\n    nnoremap <Space>n :NvimTreeToggle<CR>\n\n    lua << EOF\n    require'nvim-tree'.setup { -- BEGIN_DEFAULT_OPTS\n    auto_reload_on_write = true,\n    disable_netrw = false,\n    hide_root_folder = false,\n    hijack_cursor = false,\n    hijack_netrw = true,\n    hijack_unnamed_buffer_when_opening = false,\n    ignore_buffer_on_setup = false,\n    open_on_setup = true,\n      -- open_on_setup_file = true,\n    open_on_tab = true,\n    sort_by = \"name\",\n    update_cwd = false,\n    view = {\n        width = 30,\n        height = 30,\n        side = \"right\",\n        preserve_window_proportions = false,\n        number = true,\n        relativenumber = true,\n        signcolumn = \"yes\",\n        mappings = {\n            custom_only = false,\n            list = {\n                -- user mappings go here\n                },\n            },\n        },\n    renderer = {\n        indent_markers = {\n        enable = true,\n        icons = {\n            corner = \"\u2514 \",\n            edge = \"\u2502 \",\n            none = \"  \",\n            },\n        },\n    },\nhijack_directories = {\nenable = true,\nauto_open = true,\n},\n      update_focused_file = {\n      enable = false,\n      update_cwd = false,\n      ignore_list = {},\n      },\n  ignore_ft_on_setup = {},\n  system_open = {\n      cmd = nil,\n      args = {},\n      },\n  diagnostics = {\n  enable = false,\n  show_on_dirs = false,\n  icons = {\n      hint = \"\uf06a\",\n      info = \"\uf05a\",\n      warning = \"\uf071\",\n      error = \"\uf057\",\n      },\n  },\n      filters = {\n          dotfiles = false,\n          custom = {},\n          exclude = {},\n          },\n      git = {\n      enable = true,\n      ignore = true,\n      timeout = 400,\n      },\n  actions = {\n      use_system_clipboard = true,\n      change_dir = {\n      enable = true,\n      global = false,\n      },\n  open_file = {\n      quit_on_open = true,\n      resize_window = true,\n      window_picker = {\n      enable = true,\n      chars = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890\",\n      exclude = {\n          filetype = { \"notify\", \"packer\", \"qf\", \"diff\", \"fugitive\", \"fugitiveblame\" },\n          buftype = { \"nofile\", \"terminal\", \"help\" },\n          },\n      },\n  },\n      },\n  trash = {\n      cmd = \"trash\",\n      require_confirm = true,\n      },\n  log = {\n  enable = false,\n  truncate = false,\n  types = {\n      all = false,\n      config = false,\n      copy_paste = false,\n      git = false,\n      profile = false,\n      },\n  },\n    }\nEOF\n\n\n# \u6ce8\u91ca\nPlug 'preservim/nerdcommenter' \" \u6ce8\u91ca\n\nnmap <Space><Space> <plug>NERDCommenterToggle\n\n\" Add spaces after comment delimiters by default\nlet g:NERDSpaceDelims = 1\n\n\" Use compact syntax for prettified multi-line comments\nlet g:NERDCompactSexyComs = 1\n\n\" Align line-wise comment delimiters flush left instead of following code indentation\nlet g:NERDDefaultAlign = 'left'\n\n\" Set a language to use its alternate delimiters by default\nlet g:NERDAltDelims_java = 1\n\n\" Add your own custom formats or override the defaults\n\" let g:NERDCustomDelimiters = { 'c': { 'left': '/**','right': '*/' } }\n\n\" Allow commenting and inverting empty lines (useful when commenting a region)\nlet g:NERDCommentEmptyLines = 1\n\n\" Enable trimming of trailing whitespace when uncommenting\nlet g:NERDTrimTrailingWhitespace = 1\n\n\" Enable NERDCommenterToggle to check all selected lines is commented or not\nlet g:NERDToggleCheckAllLines = 1\n\n\n\n# other\nPlug 'jiangmiao/auto-pairs'\n\nPlug 'nvim-lua/plenary.nvim'\nPlug 'nvim-telescope/telescope.nvim'\nnnoremap <S-f> <cmd>Telescope find_files<cr>\n\nPlug 'mhinz/vim-startify'\nPlug 'ntpeters/vim-better-whitespace'\nPlug 'pechorin/any-jump.vim'\n\" Normal mode: Jump to definition under cursor\nnnoremap <leader>j :AnyJump<CR>\n\" Visual mode: jump to selected text in visual mode\nxnoremap <leader>j :AnyJumpVisual<CR>\n\" Normal mode: open previous opened file (after jump)\nnnoremap <leader>ab :AnyJumpBack<CR>\n\" Normal mode: open last closed search window again\nnnoremap <leader>al :AnyJumpLastResults<CR>\n\n\nPlug 'voldikss/vim-floaterm'\nnmap <Space>t :FloatermNew<CR>\n\nPlug 'dense-analysis/ale'\nlet b:ale_linters = ['mypy']\n\" let b:ale_linters = ['flake8', 'pylint']\n\n\nPlug 'gelguy/wilder.nvim', { 'do': ':UpdateRemotePlugins' }\ncall wilder#setup({'modes': [':', '/', '?']})\n\ncall wilder#set_option('pipeline', [\n            \\   wilder#branch(\n            \\     wilder#cmdline_pipeline(),\n            \\     wilder#search_pipeline(),\n            \\   ),\n            \\ ])\n\ncall wilder#set_option('renderer', wilder#wildmenu_renderer({\n            \\ 'highlighter': wilder#basic_highlighter(),\n            \\ }))\n\n\n\n\n# code complete: lsp\n\nPlug 'prabirshrestha/vim-lsp'\nPlug 'mattn/vim-lsp-settings'\n\nPlug 'prabirshrestha/asyncomplete.vim'\nPlug 'prabirshrestha/asyncomplete-lsp.vim'\n\n\nfunction! s:on_lsp_buffer_enabled() abort\n    setlocal omnifunc=lsp#complete\n    setlocal signcolumn=yes\n    if exists('+tagfunc') | setlocal tagfunc=lsp#tagfunc | endif\n    nmap <buffer> gd <plug>(lsp-definition)\n    nmap <buffer> gs <plug>(lsp-document-symbol-search)\n    nmap <buffer> gS <plug>(lsp-workspace-symbol-search)\n    nmap <buffer> gr <plug>(lsp-references)\n    nmap <buffer> gi <plug>(lsp-implementation)\n    nmap <buffer> gt <plug>(lsp-type-definition)\n    nmap <buffer> <leader>rn <plug>(lsp-rename)\n    nmap <buffer> [g <plug>(lsp-previous-diagnostic)\n    nmap <buffer> ]g <plug>(lsp-next-diagnostic)\n    nmap <buffer> K <plug>(lsp-hover)\n    inoremap <buffer> <expr><c-f> lsp#scroll(+4)\n    inoremap <buffer> <expr><c-d> lsp#scroll(-4)\n    nmap <Space>f <plug>(lsp-document-format)\n\n    let g:lsp_document_highlight_enabled = 1\n    let g:lsp_diagnostics_enabled = 1\n    let g:lsp_format_sync_timeout = 1000\n    autocmd! BufWritePre *.go,*.py call execute('LspDocumentFormatSync')\n    \" autocmd BufWritePre <buffer> LspDocumentFormatSync\n\n    \" refer to doc to add more commands\nendfunction\n\n\naugroup lsp_install\n    au!\n    \" call s:on_lsp_buffer_enabled only for languages that has the server registered.\n    autocmd User lsp_buffer_enabled call s:on_lsp_buffer_enabled()\naugroup END\n\nPlug 'github/copilot.vim'\n\" :Copilot setup\n")))}m.isMDXComponent=!0}}]);