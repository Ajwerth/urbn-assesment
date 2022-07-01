import { shallowMount } from '@vue/test-utils';
import Card from "@/components/Card.vue"

describe('Card.vue', () => {
  const cardName = 'Fireball';
  const wrapper = shallowMount(Card, {
    props: { cardName },
  });

  //test to make sure the card component renders props
  it('renders props.cardName when passed', () => {
    expect(wrapper.text()).toMatch(cardName);
  });

  // test to make sure card component renders a button
  it('has a button', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  })

  // test to make sure card compontent renders an image
  it('has an image', () => {
    expect(wrapper.find('img').exists()).toBe(true);
  })
});
