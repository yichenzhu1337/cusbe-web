package com.chosensolutions.trademebooks.bootstrap;

import com.chosensolutions.trademebooks.models.Account;
import com.chosensolutions.trademebooks.models.Book;
import com.chosensolutions.trademebooks.models.BookStore;
import com.chosensolutions.trademebooks.models.User;
import com.chosensolutions.trademebooks.repositories.AccountRepository;
import com.chosensolutions.trademebooks.repositories.BookRepository;
import com.chosensolutions.trademebooks.repositories.UserRepository;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
public class DatabaseSeed implements ApplicationListener<ContextRefreshedEvent> {

    private UserRepository userRepository;

    private AccountRepository accountRepository;

    private BookRepository bookRepository;

    public DatabaseSeed(UserRepository userRepository, AccountRepository accountRepository, BookRepository bookRepository) {
        this.userRepository = userRepository;
        this.accountRepository = accountRepository;
        this.bookRepository = bookRepository;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        initData();

        bookSeeds();
    }

    private void initData() {
        User user1 = new User();
        user1.setFirstName("Yi Chen");
        user1.setLastName("Zhu");
        user1.setEmail("yichenzhu1337@gmail.com");
        user1.setEmailVerificationStatus(true);
        user1.setPassword("yichen");
        //userRepository.save(user1);

        accountRepository.save(new Account("123", true));
    }

    private void bookSeeds() {
        Book book1 = new Book();
        book1.setTitle("calculus 1");
        book1.setAuthors("John Doe, Bobby Lee, Jane Doe");
        book1.setDatePublished("December 25th, 2019");
        book1.setIsbnNumber10("1234567890");
        book1.setIsbnNumber13("1234567890123");
        book1.setPublisher("Manning Publishing 1");
        book1.setEdition("1");
        book1.setBookCondition("NEW");
        book1.setPrice(100);
        book1.setDescription("This is the best book in the world. Please buy it guys! Message me.");
        book1.setSchool("UofT");
        book1.setBook_cover_image("http://google.com/images/hello.png");

        Book book2 = new Book();
        book2.setTitle("Calculus 2");
        book2.setAuthors("Spivak");
        book2.setDatePublished("December 26th, 2019");
        book2.setIsbnNumber10("1234567891");
        book2.setIsbnNumber13("1234567890124");
        book2.setPublisher("Manning Publishing 2");
        book2.setEdition("1");
        book2.setBookCondition("NEW");
        book2.setPrice(100);
        book2.setDescription("This is the best book in the world. Please buy it guys! Message me.");
        book2.setSchool("UofT");
        book2.setBook_cover_image("http://google.com/images/hello.png");

        Book book3 = new Book();
        book3.setTitle("Calculus 3");
        book3.setAuthors("Spivak 3");
        book3.setDatePublished("December 27th, 2019");
        book3.setIsbnNumber10("1234567892");
        book3.setIsbnNumber13("1234567890125");
        book3.setPublisher("Manning Publishing 3");
        book3.setEdition("1");
        book3.setBookCondition("NEW");
        book3.setPrice(100);
        book3.setDescription("This is the best book in the world. Please buy it guys! Message me.");
        book3.setSchool("UofT");
        book3.setBook_cover_image("http://google.com/images/hello.png");

        bookRepository.save(book1);
        bookRepository.save(book2);
        bookRepository.save(book3);

        BookFactory bookFactory = new BookFactory();
        for (int i = 0; i < 10; i++) {
            bookRepository.save(bookFactory.generateBook());
        }
    }
}