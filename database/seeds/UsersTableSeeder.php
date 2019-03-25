<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create([
            'name' => env('ADMIN_NAME'),
            'last_name' => env('ADMIN_LAST_NAME'),
            'email' => env('ADMIN_EMAIL'),
            'password' => bcrypt(env('ADMIN_PASSWORD'))
        ]);
        \App\User::create([
            'name' => 'Adriana',
            'last_name' => 'Diniz',
            'email' => 'adriana.diniz@rbj.com',
            'password' => bcrypt('mudar123')
        ]);


    }
}
