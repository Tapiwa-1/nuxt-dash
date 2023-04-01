<script setup>
    const form = ref({
        email: '',
        password: '',
    
    });
</script>
<template>
<section class="bg-gray-50 dark:bg-gray-900">
    <NuxtLayout  name="authform">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                        <InputLabel for="name" value="Name" />

                        <TextInput
                            id="name"
                            type="text"
                            v-model="form.name"
                            required
                            autofocus
                            autocomplete="name"
                        />

                        <!-- <InputError class="mt-2" :message="form.errors.email" /> -->
                  </div>
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
                   <div>
                       <InputLabel for="confirmPassword" value="Confirm Password" />

                        <TextInput
                            id="password"
                            type="password"
                            v-model="form.confirmPassword"
                            required
                            
                        />

                        <!-- <InputError class="mt-2" :message="form.errors.email" /> -->
                  </div>
                    <PrimaryButton  >
                        Login
                    </PrimaryButton>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                       Have an account ? <NuxtLink to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">login</NuxtLink>
                  </p>
              </form>
      </NuxtLayout>
</section>
</template>