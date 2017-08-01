<?php

use Illuminate\Database\Seeder;

class TeamsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('teams')->delete();
        
        \DB::table('teams')->insert(array (
            0 => 
            array (
                'id' => '1',
                'name' => 'Adriana Diniz',
                'role' => 'Locutora',
                'image' => '/photos//locutor_padr__o.png',
                'thumb' => '/photos//thumbs/locutor_padr__o.png',
                'created_at' => '2017-07-30 19:02:34',
                'updated_at' => '2017-07-30 19:02:34',
            ),
            1 => 
            array (
                'id' => '2',
                'name' => 'Guilherme Filho',
                'role' => 'Locutor',
                'image' => '/photos//locutor_padr__o.png',
                'thumb' => '/photos//thumbs/locutor_padr__o.png',
                'created_at' => '2017-07-30 19:02:56',
                'updated_at' => '2017-07-30 19:02:56',
            ),
            2 => 
            array (
                'id' => '3',
                'name' => 'Fernando Barreto',
                'role' => 'Locutor',
                'image' => '/photos//locutor_padr__o.png',
                'thumb' => '/photos//thumbs/locutor_padr__o.png',
                'created_at' => '2017-07-30 19:03:31',
                'updated_at' => '2017-07-30 19:03:31',
            ),
            3 => 
            array (
                'id' => '4',
                'name' => 'Divino Roberto',
                'role' => 'Locutor',
                'image' => '/photos//locutor_padr__o.png',
                'thumb' => '/photos//thumbs/locutor_padr__o.png',
                'created_at' => '2017-07-30 19:04:00',
                'updated_at' => '2017-07-30 19:04:00',
            ),
            4 => 
            array (
                'id' => '5',
                'name' => 'Carlos Silva',
                'role' => 'Locutor',
                'image' => '/photos//locutor_padr__o.png',
                'thumb' => '/photos//thumbs/locutor_padr__o.png',
                'created_at' => '2017-07-30 19:04:21',
                'updated_at' => '2017-07-30 19:04:21',
            ),
            5 => 
            array (
                'id' => '6',
                'name' => 'Lidiane Cristina',
                'role' => 'Locutor',
                'image' => '/photos//locutor_padr__o.png',
                'thumb' => '/photos//thumbs/locutor_padr__o.png',
                'created_at' => '2017-07-30 19:04:44',
                'updated_at' => '2017-07-30 19:04:44',
            ),
            6 => 
            array (
                'id' => '7',
                'name' => 'Marcio Martins',
                'role' => 'Locutor',
                'image' => '/photos//locutor_padr__o.png',
                'thumb' => '/photos//thumbs/locutor_padr__o.png',
                'created_at' => '2017-07-30 19:05:11',
                'updated_at' => '2017-07-30 19:05:11',
            ),
            7 => 
            array (
                'id' => '8',
                'name' => 'Ze Do Prado Sudam Prado',
                'role' => 'Locutor',
                'image' => '/photos//locutor_padr__o.png',
                'thumb' => '/photos//thumbs/locutor_padr__o.png',
                'created_at' => '2017-07-30 19:05:30',
                'updated_at' => '2017-07-30 19:05:30',
            ),
            8 => 
            array (
                'id' => '9',
                'name' => 'Kheronn S B Machado',
                'role' => 'Locutor',
                'image' => '/photos//locutor_padr__o.png',
                'thumb' => '/photos//thumbs/locutor_padr__o.png',
                'created_at' => '2017-07-30 19:06:53',
                'updated_at' => '2017-07-30 19:06:53',
            ),
        ));
        
        
    }
}