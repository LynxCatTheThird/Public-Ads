<template>
  <div class="content-container">
    <ClientOnly>
      <div class="content-card" v-if="currentContent">
        <div class="image-wrapper">
          <img 
            :src="currentContent.imageUrl" 
            :alt="currentContent.title"
            @error="handleImageError"
          >
        </div>
        
        <div class="info">
          <h2 class="title">{{ currentContent.title }}</h2>
          <p class="description">{{ currentContent.description }}</p>
          
          <div class="footer">
            <span class="organization">{{ currentContent.organization }}</span>
            <a 
              :href="currentContent.link" 
              target="_blank" 
              rel="noopener noreferrer"
              class="cta-button"
            >
              了解更多
            </a>
          </div>
        </div>
      </div>
      
      <template #fallback>
        <div class="content-card skeleton">
          <div class="skeleton-image"></div>
          <div class="info">
            <div class="skeleton-title"></div>
            <div class="skeleton-text"></div>
            <div class="skeleton-text"></div>
          </div>
        </div>
      </template>
    </ClientOnly>
    
    <button @click="refreshContent" class="refresh-button" :disabled="!currentContent">
      换一个公益广告
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { PublicServiceContent } from '~/composables/useContent'

const { getRandomContent } = useContent()
const currentContent = ref<PublicServiceContent | null>(null)

const refreshContent = () => {
  currentContent.value = getRandomContent()
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = '/posters/placeholder.jpg'
}

onMounted(() => {
  currentContent.value = getRandomContent()
})
</script>

<style scoped>
.content-container {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.content-card {
  background: var(--bg-secondary);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px var(--shadow-md);
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}

.content-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px var(--shadow-lg);
}

.skeleton {
  pointer-events: none;
}

.skeleton-image {
  width: 100%;
  height: 300px;
  background: linear-gradient(90deg, var(--button-bg) 25%, var(--button-bg-hover) 50%, var(--button-bg) 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

.skeleton-title {
  height: 24px;
  background: linear-gradient(90deg, var(--button-bg) 25%, var(--button-bg-hover) 50%, var(--button-bg) 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  margin-bottom: 12px;
  border-radius: 4px;
}

.skeleton-text {
  height: 16px;
  background: linear-gradient(90deg, var(--button-bg) 25%, var(--button-bg-hover) 50%, var(--button-bg) 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  margin-bottom: 8px;
  border-radius: 4px;
}

.skeleton-text:last-child {
  width: 80%;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.image-wrapper {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  padding: 24px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: var(--text-primary);
  margin-bottom: 12px;
  transition: color 0.3s ease;
}

.description {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
  transition: color 0.3s ease;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.organization {
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color 0.3s ease;
}

.cta-button {
  background: var(--primary-color);
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background: var(--primary-color-hover);
}

.refresh-button {
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  background: var(--button-bg);
  border: none;
  border-radius: 6px;
  font-size: 16px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.refresh-button:hover:not(:disabled) {
  background: var(--button-bg-hover);
}

.refresh-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 640px) {
  .content-container {
    padding: 0 10px;
  }
  
  .image-wrapper,
  .skeleton-image {
    height: 200px;
  }
  
  .title {
    font-size: 20px;
  }
  
  .description {
    font-size: 14px;
  }
  
  .info {
    padding: 16px;
  }
  
  .cta-button {
    padding: 8px 16px;
    font-size: 14px;
  }
}
</style>