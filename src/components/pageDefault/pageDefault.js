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
            loading: false,
            show: false,
        }
    },

    methods: {
        showResponse(response) {
            this.status = response.status ? response.status : response.response.status
            if (response.status > 199 && response.status < 400) {
                this.$refs.data.innerHTML = JSON.stringify(response.data, null, 2)
                this.$refs.config.innerHTML = JSON.stringify(response.config, null, 2)
                this.$refs.headers.innerHTML = JSON.stringify(response.headers, null, 2)
                Prism.highlightElement(this.$refs.data);
                Prism.highlightElement(this.$refs.config);
                Prism.highlightElement(this.$refs.headers);
            } else {
                this.$refs.data.innerHTML = JSON.stringify(response.message, null, 2)
                this.$refs.config.innerHTML = JSON.stringify(response.config, null, 2)
                this.$refs.headers.innerHTML = JSON.stringify(response.response.headers ? response.response.headers : response.code, null, 2)
                Prism.highlightElement(this.$refs.data);
                Prism.highlightElement(this.$refs.config);
                Prism.highlightElement(this.$refs.headers);
            }

        },

        showLoading(isLoading) {
            this.loading = isLoading
        },

        clean() {
            this.$refs.data.innerHTML = ''
            this.$refs.config.innerHTML = ''
            this.$refs.headers.innerHTML = ''
            this.status = ''
        },
    },
}