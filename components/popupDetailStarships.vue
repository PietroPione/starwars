<template>
    <div>
        NAVI
        Nome: <span v-html="name" ></span>
    </div>
</template>
<script>
export default {
    props: ['item']
}

</script>
