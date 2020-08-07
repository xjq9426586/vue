<template>
    <div>
        <el-button @click="getHost()">
            热门歌曲
        </el-button>
        <audio :src="playUrl" autoplay="" controls="" @ended="nextsong()">    </audio>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="歌曲ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="歌曲名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    label="图片"
                    width="180">
                <template slot-scope="scope">
                    <img :src="scope.row.al.picUrl" width="100" height="100"/>
                </template>
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="180">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="success"
                            @click.native.prevent="play(scope.row.id)">播放</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import Axios from 'axios'
    let host = 'http://172.19.160.244:3000'
    let api = host + '/top/list?idx=1'
    let apiPlay = host + '/song/url?id='
    export default {
        name: "CloudMusic",
        data() {
            return {
                tableData: [],
                playUrl: ""
            }
        },
        mounted () {
            Axios.get(api).then(res => {
                this.tableData = res.data.playlist.tracks
            })
        },
        methods: {
            getHost(){
                Axios.get(api).then(res => {
                    this.tableData = res.data.playlist.tracks
                })
            },
            play(id) {
                Axios.get(apiPlay + id).then(res => {
                    console.log(res.data)
                    this.playUrl = res.data.data[0].url
                })
            }
        }
    }
</script>

<style scoped>

</style>