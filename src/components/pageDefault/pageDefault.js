import areaButton from '@/components/areaButton/areaButton.vue'
import areaResponse from '@/components/areaResponse/areaResponse.vue'
export default {
    name: 'pageDefault',

    components: {
        areaButton,
        areaResponse
    },

    data() {
        return {
            url: '',
            status: '',
            data: '',
        }
    },

    methods: {
        showResponse(response) {
            this.status = response.status ? response.status : response.response.status
            this.$refs.data.innerHTML = JSON.stringify(response.data, null, 2)
            Prism.highlightElement( this.$refs.data);
        }
    },
}