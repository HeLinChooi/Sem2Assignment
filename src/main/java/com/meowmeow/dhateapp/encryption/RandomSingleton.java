package com.meowmeow.dhateapp.encryption;

import java.util.Random;

public class RandomSingleton {
    public static Random instance;
    private RandomSingleton(){}
    public static Random getInstance(){
        if(instance==null)instance=new Random();
        return instance;
    }
}
