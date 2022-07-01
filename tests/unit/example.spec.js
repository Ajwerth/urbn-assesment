import { shallowMount } from '@vue/test-utils';
import Card from "@/components/Card.vue"

describe('Card.vue', () => {
  const cardName = 'Fireball';
  const wrapper = shallowMount(Card, {
    props: { cardName },
  });

  it('renders props.cardName when passed', () => {
    expect(wrapper.text()).toMatch(cardName);
  });

  it('has a button', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  })

  it('has an image', () => {
    expect(wrapper.find('img').exists()).toBe(true);
  })
});
