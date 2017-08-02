<?php

use Illuminate\Database\Seeder;

class TopsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('tops')->delete();
        
        \DB::table('tops')->insert(array (
            0 => 
            array (
                'id' => '1',
                'artist' => 'Jorge e Matheus',
                'title' => 'Sosseguei',
                'music' => 'https://www.youtube.com/watch?v=62gOogC2ZTU',
                'position' => '3',
                'created_at' => '2017-07-30 18:34:25',
                'updated_at' => '2017-07-30 19:20:22',
            ),
            1 => 
            array (
                'id' => '2',
                'artist' => 'Ed Sheeran',
                'title' => 'Shape of You',
                'music' => 'https://www.youtube.com/watch?v=JGwWNGJdvx8',
                'position' => '7',
                'created_at' => '2017-07-30 18:34:25',
                'updated_at' => '2017-07-30 19:22:43',
            ),
            2 => 
            array (
                'id' => '3',
                'artist' => 'Simone e Simaria',
                'title' => 'Loka',
                'music' => 'https://www.youtube.com/watch?v=UrT0zCmsN8c',
                'position' => '1',
                'created_at' => '2017-07-30 18:34:25',
                'updated_at' => '2017-07-30 19:18:57',
            ),
            3 => 
            array (
                'id' => '4',
                'artist' => 'Adele',
                'title' => 'Sendy My Love',
                'music' => 'https://www.youtube.com/watch?v=fk4BbF7B29w',
                'position' => '6',
                'created_at' => '2017-07-30 18:34:25',
                'updated_at' => '2017-07-30 19:22:12',
            ),
            4 => 
            array (
                'id' => '5',
                'artist' => 'Michael Bublé',
                'title' => 'I Believe in You',
                'music' => 'https://www.youtube.com/watch?v=94MHIeeGwys',
                'position' => '5',
                'created_at' => '2017-07-30 18:34:25',
                'updated_at' => '2017-07-30 19:21:32',
            ),
            5 => 
            array (
                'id' => '6',
                'artist' => 'Maiara & Maraisa',
                'title' => 'Sorte que Cê Beija Bem',
                'music' => 'https://www.youtube.com/watch?v=GR8KR306Hqk',
                'position' => '2',
                'created_at' => '2017-07-30 18:34:25',
                'updated_at' => '2017-07-30 19:19:44',
            ),
            6 => 
            array (
                'id' => '7',
                'artist' => 'Gustavo Lima',
                'title' => 'Homem de Família',
                'music' => 'https://www.youtube.com/watch?v=Vz9EXeF01A8',
                'position' => '10',
                'created_at' => '2017-07-30 18:34:26',
                'updated_at' => '2017-07-30 19:24:43',
            ),
            7 => 
            array (
                'id' => '8',
                'artist' => 'Maiara & Maraisa com Marília Mendonça',
                'title' => 'Festas das Patroas',
                'music' => 'https://www.youtube.com/watch?v=RCuXwZqe5-c',
                'position' => '9',
                'created_at' => '2017-07-30 18:34:26',
                'updated_at' => '2017-07-30 19:24:11',
            ),
            8 => 
            array (
                'id' => '9',
                'artist' => 'Nego do Boreu com Part. Anitta e Wesley Safadão',
                'title' => 'Você Partiu meu Coração',
                'music' => 'https://www.youtube.com/watch?v=Xp-dKdSUuLk',
                'position' => '8',
                'created_at' => '2017-07-30 18:34:26',
                'updated_at' => '2017-07-30 19:23:30',
            ),
            9 => 
            array (
                'id' => '10',
                'artist' => 'Roberto Carlos & Jennifer Lopes',
                'title' => 'Chegaste',
                'music' => 'https://www.youtube.com/watch?v=3qMB87JndxQ',
                'position' => '4',
                'created_at' => '2017-07-30 18:34:26',
                'updated_at' => '2017-07-30 19:21:03',
            ),
        ));
        
        
    }
}