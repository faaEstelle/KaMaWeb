Problem：
    "export 'default' (imported as '__vue_script__') was not found in '!!babel-loader!../node_modules/vue-loader/lib/selector?type=script&index=0!./App.vue'
Solution：
      We couldn't see the whole project you mentioned. But I guess this error means you don't export anything in <script>. If you add a line of code: export default {}, maybe it won't be error again.If a Vue sfc doesn't have any <script> part that's OK. But if it has, you must export something (even just a empty plain object).
