


<template>

		<div class="player">
			<div class="player-controls">
				<div>
					<a v-on:click.prevent="stop" title="Stop" href="#">
						<v-icon>mdi-stop</v-icon>
					</a>
				</div>
				<div>
					<a v-on:click.prevent="playing = !playing" title="Play/Pause" href="#">
						<v-icon v-if="!playing">mdi-play</v-icon>
						<v-icon v-if="playing">mdi-pause</v-icon>
					</a>
				</div>
				<div>
					<div v-on:click="seek" class="player-progress" title="Time played : Total time">
						<div :style="{ width: this.percentComplete + '%' }" class="player-seeker"></div>
					</div>
					<div class="player-time py-1">
						<div class="player-time-current" style="font-size:12px;">{{ currentTime }}</div>
						<div class="player-time-total" style="font-size:12px;">{{ durationTime }}</div>
					</div>
				</div>
				<div>
					<a v-on:click.prevent="download" href="#">
						<svg width="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path fill="currentColor" d="M15,7h-3V1H8v6H5l5,5L15,7z M19.338,13.532c-0.21-0.224-1.611-1.723-2.011-2.114C17.062,11.159,16.683,11,16.285,11h-1.757l3.064,2.994h-3.544c-0.102,0-0.194,0.052-0.24,0.133L12.992,16H7.008l-0.816-1.873c-0.046-0.081-0.139-0.133-0.24-0.133H2.408L5.471,11H3.715c-0.397,0-0.776,0.159-1.042,0.418c-0.4,0.392-1.801,1.891-2.011,2.114c-0.489,0.521-0.758,0.936-0.63,1.449l0.561,3.074c0.128,0.514,0.691,0.936,1.252,0.936h16.312c0.561,0,1.124-0.422,1.252-0.936l0.561-3.074C20.096,14.468,19.828,14.053,19.338,13.532z"/>
						</svg>
					</a>
				</div>
				<div>
					<a v-on:click.prevent="innerLoop = !innerLoop" href="#">
						<svg width="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path v-if="!innerLoop" fill="currentColor" d="M1,12V5h3v6h10V8l5,4.5L14,17v-3H3C1.895,14,1,13.104,1,12z"/>
							<path v-else fill="currentColor" d="M20,7v7c0,1.103-0.896,2-2,2H2c-1.104,0-2-0.897-2-2V7c0-1.104,0.896-2,2-2h7V3l4,3.5L9,10V8H3v5h14V8h-3V5h4C19.104,5,20,5.896,20,7z"/>
						</svg>
					</a>
				</div>
				
				
			</div>
			<audio :loop="innerLoop" ref="audiofile" :src="file" preload="auto" style="display: none;" ></audio>
		</div>
</template>
<script>
const convertTimeHHMMSS = (val) => {
	let hhmmss = new Date(val * 1000).toISOString().substr(11, 8);

	return hhmmss.indexOf("00:") === 0 ? hhmmss.substr(3) : hhmmss;
};
export default {
	props: {
		file: {
			type: String,
			default: null
		},
		autoPlay: {
			type: Boolean,
			default: true
		},
		loop: {
			type: Boolean,
			default: false
		}
	},
	data: () => ({
		audio: undefined,
		currentSeconds: 0,
		durationSeconds: 0,
		innerLoop: false,
		loaded: false,
		showplay: true,
		playing: false,
		previousVolume: 35,
		showVolume: false,
		volume: 100
	}),
	computed: {
		currentTime() {
			return convertTimeHHMMSS(this.currentSeconds);
		},
		durationTime() {
			return convertTimeHHMMSS(this.durationSeconds);
		},
		percentComplete() {
			return parseInt(this.currentSeconds / this.durationSeconds * 100);
		},
		muted() {
			return this.volume / 100 === 0;
		}
	},
	watch: {
		playing(value) {
			if (value) { return this.audio.play(); }
			this.audio.pause();
		},
		volume(value) {
			this.showVolume = false;
			this.audio.volume = this.volume / 100;
		}
	},
	methods: {
		download() {
			this.stop();
			window.open(this.file, 'download');
		},
		load() {
			if (this.audio.readyState >= 2) {
				this.loaded = true;
				this.durationSeconds = parseInt(this.audio.duration);
				return this.playing = this.autoPlay;
			}

			throw new Error('Failed to load sound file.');
		},
		mute() {
			if (this.muted) {
				return this.volume = this.previousVolume;
			}

			this.previousVolume = this.volume;
			this.volume = 0;
		},
		seek(e) {
			if (!this.playing || e.target.tagName === 'SPAN') {
				return;
			}
			
			const el = e.target.getBoundingClientRect();
			const seekPos = (e.clientX - el.left) / el.width;

			this.audio.currentTime = parseInt(this.audio.duration * seekPos);
		},
		stop() {
			this.playing = false;
			this.audio.currentTime = 0;
		},
		update(e) {
			this.currentSeconds = parseInt(this.audio.currentTime);
		}
	},
	created() {
		this.innerLoop = this.loop;
	},
	mounted() {
		this.audio = this.$el.querySelectorAll('audio')[0];
		this.audio.addEventListener('timeupdate', this.update);
		this.audio.addEventListener('loadeddata', this.load);
		this.audio.addEventListener('pause', () => { this.playing = false; });
		this.audio.addEventListener('play', () => { this.playing = true; });
	}


};
</script>
<style lang="scss">


$player-bg: #fff;
$player-border-color: darken($player-bg, 12%);
$player-link-color: darken($player-bg, 75%);
$player-progress-color: $player-border-color;
$player-seeker-color: #3E8893;
$player-text-color: $player-link-color;

.player-wrapper {
	align-items: center;
	background-color: $player-bg;
	background-image: linear-gradient(90deg, #fff 0, darken(#fff, 12%));
	display: flex;
	justify-content: center;
	height: 100vh;
    width:100%;
}

.player {
	background-color: $player-bg;
	border: 1px solid $player-border-color;
	border-radius: 5px;
	box-shadow: 0 5px 8px rgba(0,0,0,0.15);
	color: $player-text-color;
	display: inline-block;
	line-height: 1.5625;
}

.player-controls {
	display: flex;
	
	> div {
		border-right: 1px solid $player-border-color;
		
		&:last-child {
			border-right: none;
		}
		
		a {
			color: $player-link-color;
			display: block;
			line-height: 0;
			padding: 4px;
			text-decoration: none;
		}
	}
}

.player-progress {
	background-color: $player-progress-color;
	cursor: pointer;
	height: 30%;
	min-width: 100px;
	position: relative;
	
	.player-seeker {
		background-color: $player-seeker-color;
		bottom: 0;
		left: 0;
		position: absolute;
		top: 0;
	}
}

.player-time {
	display: flex;
	// font-size: 18px;
	justify-content: space-between;

	.player-time-current {
		font-weight: 700;
		padding-left: 5px;
	}

	.player-time-total {
		opacity: 0.5;
		padding-right: 5px;
	}
}
</style>