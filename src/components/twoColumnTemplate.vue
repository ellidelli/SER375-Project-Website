<template>
    <div class="data">
        <h1>{{ projectTitle }}</h1>
        <h3>{{ author }}</h3>
        <div class="container">
            <div class="left">
                <p>{{ description }}</p>
                <p>{{ story }}</p>
                <p>{{ struggles }}</p>
                <p>{{ triumphs }}</p>
            </div>
            <div class="right">
                <div v-for="(picture, index) in pictures" :key="index">
                    <img :src="picture" alt="Project Image">
                </div>
                <video :src="video" controls></video>
            </div>
        </div>
    </div>
</template>

<script>
import projectData from '../projects/projects.json'
export default {
    mounted() {
        console.log(this.$route.params.name)
    },
    props: {
        backgroundColor: String,
        projectTitle: String,
        author: String,
        description: String,
        story: String,
        struggles: String,
        triumphs: String,
        pictures: Array,
        video: String
    }
}
</script>

<style scoped>
.data {
    margin-top: 10vh;
}

.container {
    display: flex;
    flex-direction: row;
}

.left {
    width: 50%;
    float: left;
    display: flex;
    flex-direction: column;
}

.right {
    width: 50%;
    float: right;
    display: flex;
    flex-direction: column;
}

.right img {
    width: fit-content;
    max-width: 90%;
}

.right video {
    width: 90%;
}

h1,
h2,
h3 {
    color: white;
}

h3 {
    padding-bottom: 5vh;
}
</style>