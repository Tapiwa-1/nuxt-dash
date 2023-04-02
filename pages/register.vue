<script setup>
    const { $userStore } = useNuxtApp()
    const router = useRouter()
    let name = ref(null)
    let email = ref(null)
    let password = ref(null)
    let confirmPassword = ref(null)
    let errors = ref(null)
    const register = async () => {
        errors.value = null
        try {
            await $userStore.getTokens()
            await $userStore.register(
                name.value, 
                email.value, 
                password.value, 
                confirmPassword.value
            )
            await $userStore.getUser()
            router.push('/');
        } catch (error) {
            console.log(error)
            errors.value = error.response.data.errors
        }
    }
</script>
<template>
<section class="bg-gray-50 dark:bg-gray-900">
    <NuxtLayout  name="authform">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form method="post" @submit.prevent="register" class="space-y-4 md:space-y-6" action="#">
                <div>
                        <InputLabel for="name" value="Name" />

                        <TextInput
                            id="name"
                            type="text"
                            v-model="name"
                            required
                            autofocus
                            autocomplete="name"
                        />

                        <InputError class="mt-2" :message="errors && errors.name ? errors.name[0] : ''" />
                  </div>
                  <div>
                        <InputLabel for="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            v-model="email"
                            required
                            autofocus
                            autocomplete="email"
                        />

                        <InputError class="mt-2" :message="errors && errors.email ? errors.email[0] : ''" />
                  </div>
                  <div>
                       <InputLabel for="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            v-model="password"
                            required
                            
                        />

                        <InputError class="mt-2" :message="errors && errors.password ? errors.password[0] : ''" />
                  </div>
                   <div>
                       <InputLabel for="confirmPassword" value="Confirm Password" />

                        <TextInput
                            id="password"
                            type="password"
                            v-model="confirmPassword"
                            required
                            
                        />

                        <InputError class="mt-2" :message="errors && errors.confirmPassword ? errors.confirmPassword[0] : ''"/>
                  </div>
                    <PrimaryButton @click="register()"  >
                        Register
                    </PrimaryButton>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                       Have an account ? <NuxtLink to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">login</NuxtLink>
                  </p>
              </form>
      </NuxtLayout>
</section>
</template>