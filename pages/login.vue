<script setup>
    const form = ref({
        email: '',
        password: '',
    
    });
</script>
<template>
<section class="bg-gray-50 dark:bg-gray-900">
    <NuxtLayout name="authform">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                        <InputLabel for="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            v-model="form.email"
                            required
                            autofocus
                            autocomplete="username"
                        />

                        <!-- <InputError class="mt-2" :message="form.errors.email" /> -->
                  </div>
                  <div>
                       <InputLabel for="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            v-model="form.password"
                            required
                           
                        />

                        <!-- <InputError class="mt-2" :message="form.errors.email" /> -->
                  </div>
                  <div class="flex items-center justify-between">
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                    <PrimaryButton  >
                        Log in
                    </PrimaryButton>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <NuxtLink to="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</NuxtLink>
                  </p>
              </form>
      </NuxtLayout>
</section>
</template>