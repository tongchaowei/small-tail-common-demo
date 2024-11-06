<script setup lang="ts">
import LoginFormByPwd from "@/components/login-form-by-pwd.vue"
import LoginFormByEmail from "@/components/login-form-by-email.vue"
import LoginFormToggle from "@/pages/st-login-page-1/components/login-form-toggle.vue"
import { ref } from "vue"

// 是否切换为第二个表单
const isToggleForm = ref(false)

// LoginFormToggle 切换表单事件的处理函数
const toggleFormHandler = () => {
  isToggleForm.value = !isToggleForm.value
}
</script>

<template>
  <div class="st-login-page-1-demo-page bg-gray-100">
    <st-login-page-1
      v-model="isToggleForm"
      :circle-mask-color="'#18a058'"
      :panel-img-src="[
        '/images/svgs/1.svg',
        '/images/svgs/2.svg'
      ]"
    >
      <template #form-1>
        <LoginFormByEmail />
      </template>
      <template #panel-1-top>
        <LoginFormToggle
          title="无法邮箱登录"
          sub-title="如果您的账号还未绑定邮箱，那么您需要先使用用户名密码登录后绑定邮箱"
          toggle-btn-text="用户名密码登录"
          :toggle-handler="toggleFormHandler"
        />
      </template>
      <template #form-2>
        <LoginFormByPwd />
      </template>
      <template #panel-2-top>
        <LoginFormToggle
          title="使用邮箱登录"
          sub-title="如果您的账号已经绑定了邮箱，那么您可以直接使用邮箱登录"
          toggle-btn-text="前往邮箱登录"
          :toggle-handler="toggleFormHandler"
        />
      </template>
    </st-login-page-1>
  </div>
</template>
