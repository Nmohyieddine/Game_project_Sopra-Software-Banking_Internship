package com.mycompany.myapp.service.mapper;

import com.mycompany.myapp.domain.*;
import com.mycompany.myapp.service.dto.QuestionsDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Questions} and its DTO {@link QuestionsDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface QuestionsMapper extends EntityMapper<QuestionsDTO, Questions> {


    @Mapping(target = "iDQUESTIONS", ignore = true)
    @Mapping(target = "removeIDQUESTION", ignore = true)
    Questions toEntity(QuestionsDTO questionsDTO);

    default Questions fromId(Long id) {
        if (id == null) {
            return null;
        }
        Questions questions = new Questions();
        questions.setId(id);
        return questions;
    }
}
