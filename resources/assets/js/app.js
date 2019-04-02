import Vue from 'vue';
import sample from './data';

let app = new Vue({
    el: '#app',
    data: {
        title: sample.title,
        address: sample.address,
        about: sample.about,
        headerImageStyle: {
            'background-image': 'url(/images/header.jpg)'
        },
        amenities: sample.amenities,
        prices: sample.prices,
        contracted: true,
        modalOpen: false
    },
    methods: {
        escapeKeyListener(evt) {
            if (evt.keyCode === 27 && this.modalOpen) {
                this.modalOpen = false;
            }
        }
    },
    watch: {
        modalOpen() {
            let className = 'modal-open';
            if (this.modalOpen) {
                document.body.classList.add(className);
            } else {
                document.body.classList.remove(className);
            }
        }
    },
    created() {
        document.addEventListener('keyup', this.escapeKeyListener);
    },
    destroyed() {
        document.removeEventListener('keyup', this.escapeKeyListener);
    }
});