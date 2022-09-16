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
            config: '',
            headers: '',
            loading: false
        }
    },

    methods: {
        showResponse(response) {
            this.status = response.status ? response.status : response.response.status
            this.$refs.data.innerHTML = JSON.stringify(response.data, null, 2)
            this.$refs.config.innerHTML = JSON.stringify(response.config, null, 2)
            this.$refs.headers.innerHTML = JSON.stringify(response.headers, null, 2)
            Prism.highlightElement(this.$refs.data);
            Prism.highlightElement(this.$refs.config);
            Prism.highlightElement(this.$refs.headers);
        }
    },
}